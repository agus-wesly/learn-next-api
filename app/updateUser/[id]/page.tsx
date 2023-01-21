import UpdateEmployee from "./UpdateEmployee";

async function UpdatePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const response = await fetch(`http://localhost:3500/api/user/${id}`);
  const { user } = await response.json();

  return (
    <div>
      <UpdateEmployee employee={user} id={id} />
    </div>
  );
}

export default UpdatePage;
