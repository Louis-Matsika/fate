import { sql } from "#/lib/neon";
import { NextRequest, NextResponse } from "next/server";

const lastSubmissionByIp = new Map<string, number>();
const COOLDOWN_MS = 60_000;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const ip: string =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const now = Date.now();
    const last = lastSubmissionByIp.get(ip);
    if (last != null && now - last < COOLDOWN_MS) {
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

    // Insert email into database
    await sql`
      INSERT INTO "Email List" ("Email")
      VALUES (${email.trim()})
      ON CONFLICT ("Email") DO NOTHING
    `;

    lastSubmissionByIp.set(ip, now);

    return NextResponse.json(
      { message: "Email submitted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting email:", error);
    // Provide more specific error messages
    const errorMessage = error?.message || "Failed to submit email";
    return NextResponse.json(
      { error: errorMessage, details: error?.code },
      { status: 500 }
    );
  }
}
