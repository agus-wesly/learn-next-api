import Image from "next/image";
import Register from "./register";
import LeftBanner from "../../components/LeftBanner";

function Page() {
  return (
    <section className="flex max-w-[100vw] md:max-w-auto">
      <LeftBanner />
      <div className="flex-1 hidden md:flex items-center justify-center">
        <Register />
      </div>
      <br />
      <div className="flex md:hidden w-full ">
        <Register />
      </div>

      <div className="hidden md:flex items-end pb-5 px-3">
        <div className="flex items-center p-2 bg-purple-100 rounded-full cursor-pointer space-x-2">
          <Image src={"/help.svg"} alt="help" width={18} height={18} />

          <p className="font-bold text-sm text-[#6913d8]">Need Help?</p>
        </div>
      </div>
    </section>
  );
}

export default Page;
