import React from "react";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import Homepage from "./Homepage";

async function Page() {
  const response = await fetch("http://localhost:3500/api/user");
  const { data } = await response.json();

  return (
    <main className="font-Inter">
      <Navbar />
      <Homepage cards={data} />
      <BottomNav />
    </main>
  );
}

export default Page;
