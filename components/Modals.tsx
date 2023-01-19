"use client";

import { useState, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
// import FramerWrapper from "../app/FramerWrapper";

const Modal = ({ children }: { children: ReactNode }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);

    return () => {
      setMount(false);
    };
  }, []);

  if (!mount) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 w-screen h-screen bg-black/80 z-[5] flex items-center justify-center">
        {children}
      </div>
    </>,
    document.getElementById("_portal")!
  );
};

export default Modal;
