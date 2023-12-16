import { Righteous } from "next/font/google";
import React from "react";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className="flex justify-between px-[2rem] py-4">
      <h1 className={[righteous.className, "text-2xl"].join(" ")}>SARA</h1>
      <button className=" bg-[#94F3E7] rounded-[26px] px-4 py-2">
        Get Started
      </button>
    </header>
  );
};

export default Navbar;
