import EditForm from "./editForm";

const getSinglePost = async (id: string) => {
  const resp = await fetch(`/api/user/${id}`).then((resp) => resp.json());
  return resp;
};

async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const post = await getSinglePost(id);

  return (
    <div>
      <EditForm post={post} />
    </div>
  );
}

export default Page;
