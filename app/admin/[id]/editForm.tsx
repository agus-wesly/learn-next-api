"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function EditForm({ post }: any) {
  const [name, setName] = useState(post.name);
  const [email, setEmail] = useState(post.email);
  const [age, setAge] = useState(post.age);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resp = await fetch(`/api/user/${post.id}`, {
      body: JSON.stringify({
        name: name,
        email: email,
        age: Number(age),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });

    if (resp.status === 201) {
      router.push("/admin");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <input
        name="age"
        id="age"
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditForm;
