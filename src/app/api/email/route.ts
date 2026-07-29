import { sql } from "#/lib/neon";
import { NextRequest, NextResponse } from "next/server";

const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, captchaToken } = body;

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Verify hCaptcha token server-side
    if (!captchaToken) {
      return NextResponse.json(
        { error: "Captcha is required" },
        { status: 400 }
      );
    }
    if (!HCAPTCHA_SECRET) {
      return NextResponse.json(
        { error: "Server captcha configuration missing" },
        { status: 500 }
      );
    }
    const captchaRes = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: HCAPTCHA_SECRET,
        response: captchaToken,
      }),
    });
    const captchaData = await captchaRes.json();
    if (!captchaData.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 403 }
      );
    }

    const ip: string =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // DB-based rate limiting (survives serverless cold starts)
    const rateCheck = await sql`
      SELECT 1 FROM "Rate Limit"
      WHERE ip = ${ip} AND last_submission > NOW() - INTERVAL '1 minute'
    `;
    if (rateCheck.length > 0) {
      return NextResponse.json(
        { error: "Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // insert email into data base
    await sql`
      INSERT INTO "Email List" ("Email")
      VALUES (${email.trim()})
      ON CONFLICT ("Email") DO NOTHING
    `;

    await sql`
      INSERT INTO "Rate Limit" (ip, last_submission)
      VALUES (${ip}, NOW())
      ON CONFLICT (ip) DO UPDATE SET last_submission = NOW()
    `;

    return NextResponse.json(
      { message: "Email submitted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting email:", error);
    // Avoid leaking internal error details to clients.
    return NextResponse.json({ error: "Failed to submit email" }, { status: 500 });
  }
}
