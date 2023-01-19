import { ReactNode } from "react";
// import FramerWrapper from "../FramerWrapper";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {children}
      {/* <FramerWrapper>{children}</FramerWrapper> */}
    </section>
  );
}
