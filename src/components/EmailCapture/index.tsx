import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha"; // Commented out for testing
import styles from "./styles.module.scss";
import TextBlock from "../TextBlock";
import Subheading from "../Subheading";

// hCaptcha site key
const SITE_KEY = "2b40a8be-f44c-41d4-88f6-6170477c9e8a";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [successfulSubmit, setSuccessfulSubmit] = useState(false)

  // hCaptcha
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<any>(null);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the captcha.");
      return;
    }

    const target = e.target as typeof e.target & {
      email: { value: string };
      name: { value: string };
    };

    if (target.name.value) {
      return;
    }

    const emailValue = target.email.value;

    if (!emailValue || emailValue.trim() === "") {
      console.error("Email value is empty");
      return;
    } else {
      setEmail(emailValue);
    }

    // Submit to Neon PostgreSQL via API route
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, captchaToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.error || "Failed to submit email");
        return;
      }

      setSuccessfulSubmit(true);
      console.log("Email submitted successfully:", emailValue);
      // Clear the email field on success
      setEmail("");
    } catch (error) {
      console.error("Error submitting email:", error);
      return;
    }

    captchaRef.current?.resetCaptcha();
    setCaptchaToken("");
  };

  return (
    <div className={styles.EmailCapture}>
      <Subheading
        className={styles.Subheading}
        text="Sign up to my newsletter!"
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-input">Enter Email:</label>
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="name"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
        />
<div className={styles.HCaptcha}>
  <HCaptcha
    sitekey={SITE_KEY}
    onVerify={setCaptchaToken}
    ref={captchaRef}
  />
</div>
        <input
          type="submit"
          value="Submit"
        />
      </form>
        <TextBlock className={successfulSubmit ? styles.textBlockOn : styles.textBlockOff}> I'll be in touch ;)</TextBlock>
    </div>
  );
};

export default EmailCapture;