import Image from "next/image";
import { companies } from "../constant";
import Companie from "./Companie";

function LeftBanner() {
  return (
    <div className="w-[400px] fixed left-0 top-0 max-h-screen bg-[#6913d8] pt-10 pb-6 min-h-screen px-8 md:flex flex-col justify-between hidden">
      <img src="/logo.svg" alt="logo" className="w-[81px] h-[24px]" />

      <p className="mt-10 text-2xl font-bold text-white text-shadow-custom text-shadow">
        Let 450+ companies <br /> approach you with <br />
        <span className="text-yellow-400">job offers</span>
      </p>

      <div className="grid grid-cols-3 gap-3">
        {companies.map((comp, i) => (
          <Companie key={i} img={comp.url} />
        ))}
      </div>

      <div className="flex cursor-pointer rounded flex-row relative items-center p-3 bg-white justify-between border border-black after:content-[''] after:bg-yellow-300 after:w-full after:h-full after:rounded after:right-0 after:bottom-0 after:z-[-1] after:translate-x-[5px] after:translate-y-[5px] after:absolute group">
        <p className="text-gray-800 text-sm font-bold">Sign In as employer</p>

        <Image
          src={
            "	https://talent.usedeall.com/_next/static/media/SignInAsEmployerArrow.ae3ec9a8.png"
          }
          alt="arrow"
          width={20}
          height={20}
          className="object-contain group-hover:scale-[1.25] transition"
        />
      </div>
    </div>
  );
}

export default LeftBanner;
