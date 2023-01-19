import React from "react";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import Homepage from "./Homepage";

function Page() {
  // const response = await fetch("http://localhost:3000/api/user");
  // const { data } = await response.json();

  return (
    <main className="font-Inter">
      <h1>Hello World</h1>
      {/* <Navbar />
      <Homepage cards={data} />
      <BottomNav /> */}
    </main>
  );
}

export default Page;
