"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../components/Modals";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IProps {
  id: number;
  image: string;
  name: string;
  role: string;
  location: string;
  salary: string;
}

function Card({ image, name, role, location, salary, id }: IProps) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleShowModal = () => {
    document.body.classList.add("overflow-hidden");
    setShowModal(true);
  };

  const handleCancel = async () => {
    document.body.classList.remove("overflow-hidden");
    setShowModal(false);
  };

  const handleDelete = async (id: number) => {
    const response = await fetch(`/api/user/${id}`, {
      method: "DELETE",
    });
    if (response.status === 204) {
      alert("Deleted");
      document.body.classList.remove("overflow-hidden");
      setShowModal(false);
      router.refresh();
    }
  };

  function ModalContent() {
    return (
      <div className="bg-neutral-50 flex flex-col p-5 justify-between rounded-lg shadow-sm shadow-black">
        <h1 className="text-center text-neutral-800 text-sm font-semibold">
          Are you sure to delete ?
        </h1>
        <div className="flex justify-between mt-5">
          <button
            onClick={handleCancel}
            className="py-1 px-4 rounded-full bg-gray-100/70 text-gray-700 text-[11px] font-medium"
          >
            Cancell
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="py-1 px-4 rounded-full bg-red-100/70 text-red-700 text-[11px] font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg flex flex-col px-5 pt-10 pb-5 shadow-md cursor-pointer hover:ring-[1px] hover:ring-purple-500">
      {/* Modal */}
      {showModal && (
        <Modal>
          <ModalContent />
        </Modal>
      )}

      <div className="flex space-x-3 items-center">
        <div className="w-7 h-7 relative">
          <Image
            src={image}
            alt="profile"
            fill={true}
            className="object-contain rounded-full"
          />
        </div>

        <div className="">
          <h3 className="text-base font-semibold text-neutral-900">{name}</h3>

          <p className="text-xs text-neutral-600">{role}</p>
        </div>
      </div>

      <div className="my-3 space-y-1">
        <div className="flex space-x-2">
          <img
            src="/location.svg"
            alt="location"
            className="w-4 h-4 object-contain"
          />
          <p className="text-xs text-neutral-600">{location}</p>
        </div>

        <div className="flex space-x-2">
          <img
            src="/money.svg"
            alt="money"
            className="w-4 h-4 object-contain"
          />
          <p className="text-xs text-neutral-600">{salary}</p>
        </div>
      </div>

      <div className="flex">
        <button
          onClick={handleShowModal}
          className="py-1 px-4 rounded-full bg-red-100/70 text-red-700 text-[11px] font-medium mr-2"
        >
          Delete Employee
        </button>

        <Link
          href={`/updateUser/${id}`}
          className="py-1 px-4 rounded-full bg-yellow-100/70 text-yellow-700 text-[11px] font-medium"
        >
          Update
        </Link>
      </div>
    </div>
  );
}

export default Card;
