import Login from "./login";
import LeftBanner from "../../components/LeftBanner";

function Page() {
  return (
    <section className="flex max-w-[100vw] md:max-w-auto ">
      <LeftBanner />
      <div className="flex-1 hidden md:flex items-center justify-center min-h-screen ">
        <Login />
      </div>
      <br />
      <div className="flex md:hidden w-full px-10 pt-10">
        <Login />
      </div>
    </section>
  );
}

export default Page;
