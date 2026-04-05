import { useState } from "react";
import { loginUser } from "../services/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(form);

    console.log(res);

    if (res.token) {
      localStorage.setItem("token", res.token);
      alert("Login successful");
    } else {
      alert(res.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;