"use client";

import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

interface Employee {
  auth_id: number;
  user_name: string;
  role: string;
  location: string;
  salary: string;
}

function AddUser({ employee, id }: { employee: Employee; id: string }) {
  const { user_name, location, salary } = employee;

  const nameRef = useRef<HTMLInputElement | null>(null);
  const locationRef = useRef<HTMLInputElement | null>(null);
  const salaryRef = useRef<HTMLInputElement | null>(null);
  const roleRef = useRef<HTMLSelectElement>(null);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nameRef.current?.value &&
      locationRef.current?.value &&
      salaryRef.current?.value &&
      roleRef.current?.value
    ) {
      const resp = await fetch(`/api/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: nameRef.current.value,
          location: locationRef.current.value,
          salary: salaryRef.current.value,
          role: roleRef.current.value,
        }),
      });
      if (resp.status === 204) {
        alert("Updated !");
        router.push("/");
      }
    } else {
      alert("Please fill the empty field !");
    }
  };

  type role =
    | "Administrator"
    | "UI/UX"
    | "Project Manager"
    | "Developer"
    | "Data Science";

  const roleOptions: role[] = [
    "Administrator",
    "Data Science",
    "UI/UX",
    "Developer",
    "Project Manager",
  ];

  return (
    <div className="md:max-w-[470px] w-full p-5 px-10 md:px-0 mx-auto md:mt-10 pb-[84px]">
      <h1 className="font-bold text-lg md:text-lg text-neutral-900 my-5 md:mb-3">
        Update <span className="text-[#6913d8]">Employee</span>
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-3"
          htmlFor="email"
        >
          Full Name
        </label>
        <input
          type="text"
          name="text"
          placeholder="Enter your full name"
          autoComplete="off"
          defaultValue={user_name}
          ref={nameRef}
          className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80 mb-5"
        />{" "}
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-3"
          htmlFor="role"
        >
          Role
        </label>
        <select
          name="role"
          ref={roleRef}
          id="role"
          className="bg-neutral-50 ring-[1px] ring-gray-200  rounded-lg px-1 py-2 md:py-3  text-xs md:text-sm focus:border-none focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80 text-gray-700 font-medium mb-5"
        >
          {roleOptions.map((role) => (
            <option key={role} value={role} className="text-neutral-800">
              {role}
            </option>
          ))}
        </select>
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-3"
          htmlFor="location"
        >
          Location
        </label>
        <input
          type="text"
          className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80 mb-5"
          name="location"
          defaultValue={location}
          autoComplete="off"
          placeholder="Ex : Jakarta, Bandung"
          ref={locationRef}
        />
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-3"
          htmlFor="salary"
        >
          Salary
        </label>
        <input
          type="text"
          className="bg-neutral-50 ring-[1px] ring-gray-200 rounded-lg p-2 md:p-3 placeholder:text-gray-300 text-xs md:text-sm focus:border-none placeholder:text-xs md:placeholder:text-sm focus:outline-none focus:ring-[1px] focus:ring-[#6913d8]/80"
          name="salary"
          defaultValue={salary}
          placeholder="Salary per month"
          ref={salaryRef}
        />
        <button
          className="flex rounded-full bg-[#6913d8] p-1 py-2 md:py-2 justify-center font-semibold md:font-bold text-sm md:text-base text-center hover:bg-neutral-50 hover:text-[#6913d8] transition text-white mt-10 my-5"
          type="submit"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
