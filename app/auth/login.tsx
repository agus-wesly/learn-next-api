"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resp = await fetch("/api/login", {
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!resp.ok) return;
    console.log("Success");

    router.replace("/admin");
  };

  return (
    <div className="md:max-w-[420px] w-full md:ml-[calc(50%-400px)]">
      <h1 className="font-bold text-base md:text-lg text-neutral-900 mb-1 md:mb-3">
        Sign In
      </h1>

      <p className="text-xs md:text-sm text-neutral-500 mb-3 md:mb-5">
        Unlock job offers especially for you{" "}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-1"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-neutral-50 border border-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80"
        />{" "}
        <br />
        <div className="flex justify-between items-center mb-1">
          <label
            className="text-xs md:text-sm text-neutral-600 font-semibold"
            htmlFor="password"
          >
            Password
          </label>

          <p className="text-xs md:text-sm cursor-pointer text-[#6913d8]">
            Forgot Password ?
          </p>
        </div>
        <input
          type="password"
          className="bg-neutral-50 border border-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          className="flex rounded-full bg-[#6913d8] p-1 md:py-3 justify-center font-semibold md:font-bold text-base md:text-lg text-center hover:bg-neutral-50 hover:text-[#6913d8] transition text-white"
          type="submit"
        >
          Sign In
        </button>
        <button
          className="flex items-center rounded-full bg-white font-semibold md:font-bold text-sm md:text-lg text-center hover:bg-neutral-50 justify-center border border-slate-200 py-1 mt-3 text-neutral-600"
          type="submit"
        >
          <span className="md:w-10 w-7 h-7 md:h-10">
            <img
              src="/google.png"
              alt="google"
              className="w-full h-full object-contain"
            />
          </span>
          Sign In with Google
        </button>
      </form>

      <p className="mt-3 md:mt-5 text-[10px] md:text-xs text-neutral-800">
        New to Deall ?{" "}
        <Link href={"/register"}>
          <span className="text-[#6913d8] cursor-pointer hover:underline">
            Sign Up
          </span>
        </Link>
      </p>
      <div className="flex md:hidden cursor-pointer rounded flex-row relative items-center p-2 bg-white justify-between border border-black after:content-[''] after:bg-yellow-400 after:w-full after:h-full after:rounded after:right-0 after:bottom-0 after:z-[-1] after:translate-x-[5px] after:translate-y-[5px] after:absolute mt-5">
        <p className="text-gray-800 text-xs font-semibold">
          Sign In as employer
        </p>

        <Image
          src={
            "	https://talent.usedeall.com/_next/static/media/SignInAsEmployerArrow.ae3ec9a8.png"
          }
          alt="arrow"
          width={18}
          height={18}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Login;
