"use client";
import { useRouter } from "next/navigation";

function Button({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const resp = await fetch(`http://localhost:3000/api/user/${id}`, {
      method: "DELETE",
    });
    if (resp.ok) router.refresh();
  };

  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default Button;
