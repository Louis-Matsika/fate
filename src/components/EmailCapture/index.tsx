import { useState } from "react";
import { supabase } from "#/lib/supabase";

const EmailCapture = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    const emailValue = target.email.value;

    if (!emailValue || emailValue.trim() === null) {
      console.error("Email value is empty");
      return;
    } else {
      setEmail(target.email.value);
    }

    console.log(email);

    const { data, error } = await supabase
      .from("Email List")
      .insert([{ Email: email }]);

    if (error) {
      console.error(error.message);
      return;
    }
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
