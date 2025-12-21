import { useState } from "react";

const EmailCapture = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    setEmail(target.email.value);

    console.log(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">Email:</label>
        <input type="email" name="email" id="email-input" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EmailCapture;
