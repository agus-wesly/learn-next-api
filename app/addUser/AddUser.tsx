"use client";

import { FormEvent, useState, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { uploadImage } from "../../api/firebaseApi";
import Image from "next/image";

function AddUser() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const locationRef = useRef<HTMLInputElement | null>(null);
  const salaryRef = useRef<HTMLInputElement | null>(null);
  const roleRef = useRef<HTMLSelectElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (e.target.files.length < 1) return;

      setPreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !nameRef.current ||
      !locationRef.current ||
      !salaryRef.current ||
      !roleRef.current ||
      !image
    )
      return;

    //Upload img to firebase
    const downURL = await uploadImage(image);

    console.log("Down URL", downURL);

    if (!downURL) return;

    const resp = await fetch("/api/user", {
      body: JSON.stringify({
        name: nameRef.current.value,
        location: locationRef.current.value,
        salary: salaryRef.current.value,
        role: roleRef.current.value,
        image: downURL,
      }),

      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (resp.status === 201) {
      const { newUser } = await resp.json();
      router.push("/");
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
        Add New <span className="text-[#6913d8]">Employee</span>
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          className="text-xs md:text-sm text-neutral-600 font-semibold mb-5"
          htmlFor="profile"
        >
          {!preview && (
            <input
              type="file"
              name="profile"
              id="profile"
              className="w-0 h-0"
              onChange={handleFileChange}
            />
          )}

          <p className="mb-3">Profile Picture</p>

          <div
            className={`relative mx-auto justify-center ${
              !preview
                ? "border-dashed p-2 border-[2px] w-full aspect-[2/1] rounded-lg"
                : "w-1/2 aspect-square rounded-full"
            }  md:-m3 border-gray-200 flex items-center flex-col bg-neutral-50 text-center cursor-pointer  shadow-sm`}
          >
            {!preview && (
              <>
                <img
                  src="/image.svg"
                  alt="image-input"
                  className="w-8 h-8 object-contain opacity-50"
                />
                <p className="text-gray-300">Upload Picture</p>
              </>
            )}

            {preview && (
              <Image
                src={preview}
                fill={true}
                alt="preview"
                className=" object-cover rounded-full"
              />
            )}
          </div>
        </label>
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
