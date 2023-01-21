"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password && email && name && confirmPwd && password === confirmPwd) {
      const resp = await fetch("/api/register", {
        body: JSON.stringify({ email, password, name }),
        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",
      });
      if (resp.status === 201) {
        alert("Sucess");
        // router.push("/admin");
      }
    } else {
      alert("Please try again");
    }
  };

  return (
    <div className="md:max-w-[420px] md:ml-[470px] w-full">
      <h1 className="font-bold text-lg md:text-lg text-neutral-900 mb-5 md:mb-3">
        Join 93K+ talents securing their <br className="block md:hidden" />{" "}
        dream job
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-1"
          htmlFor="email"
        >
          Full Name
        </label>
        <input
          type="text"
          name="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-neutral-50 ring-[1px] ring-gray-200 mb-3 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80"
        />{" "}
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
          className="bg-neutral-50 ring-[1px] ring-gray-200  rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80 mb-3"
        />{" "}
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          className="bg-neutral-50 ring-[1px] ring-gray-200  rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80 mb-3"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold"
          htmlFor="password"
        >
          Confirm Password
        </label>
        <input
          type="password"
          className="bg-neutral-50 ring-[1px] ring-gray-200  rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80"
          name="password"
          placeholder="Confirm Password"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
        />
        <div className="flex items-center space-x-2 my-5">
          <input type="checkbox" />

          <p className="text-xs md:text-sm text-gray-600 md:text-gray-800">
            By creating an account, I agree to the{" "}
            <span className="text-[#6913d8] font-semibold cursor-pointer">
              terms & conditions
            </span>
          </p>
        </div>
        <button
          className="flex rounded-full bg-[#6913d8] p-1 py-2 md:py-2 justify-center font-semibold md:font-bold text-sm md:text-base text-center hover:bg-neutral-50 hover:text-[#6913d8] transition text-white"
          type="submit"
        >
          Register
        </button>
        <button
          className="flex items-center rounded-full bg-white font-semibold md:font-bold text-sm md:text-base text-center hover:bg-neutral-50 justify-center border border-slate-200 mt-3 text-neutral-600"
          // type="submit"
        >
          <span className="md:w-10 w-7 h-7 md:h-10">
            <img
              src="/google.png"
              alt="google"
              className="w-full h-full object-contain"
            />
          </span>
          Sign Up with Google
        </button>
      </form>

      <p className="mt-3 md:mt-5 text-[10px] md:text-xs text-neutral-800">
        Already have an account ?{" "}
        <Link href={"/auth"}>
          <span className="text-[#6913d8] cursor-pointer hover:underline">
            Sign In
          </span>
        </Link>
      </p>
    </div>
  );
}

export default Login;
