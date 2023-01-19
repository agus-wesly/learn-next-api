import Image from "next/image";
import React from "react";

function Companie({ img }: { img: string }) {
  return (
    <div className="border border-black relative rounded bg-white p-3 text-center text-base after:absolute after:content-[''] after:bg-yellow-300 after:w-full after:h-full after:rounded after:right-0 after:bottom-0 after:z-[-1] after:translate-x-[5px] after:translate-y-[5px]">
      <div className="w-full h-[30px] relative">
        <Image src={img} alt="img1" fill={true} className="object-contain" />
      </div>
    </div>
  );
}

export default Companie;
