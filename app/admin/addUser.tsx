"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

function AddUser() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      age: { value: number };
    };

    const { name, email, age } = target;

    const resp = await fetch("/api/user", {
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        age: Number(age.value),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (resp.status === 201) router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="name" id="name" /> <br />
      <input type="text" placeholder="Email" name="email" id="email" /> <br />
      <input name="age" id="age" type="text" placeholder="Age" />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddUser;
