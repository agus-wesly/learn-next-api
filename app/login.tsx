"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resp = await fetch("/api/login", {
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (resp.status === 200) router.push("/admin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
