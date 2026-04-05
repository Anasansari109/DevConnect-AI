import { useState } from "react";
import { signupUser } from "../services/api";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Form Submitted"); // 👈 ye add karo

  const res = await signupUser(form);

  console.log(res); // 👈 ye bhi
  alert(res.message);
};

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <br />

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;