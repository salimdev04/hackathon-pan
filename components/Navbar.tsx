import { Righteous } from "next/font/google";
import Link from "next/link";
import React from "react";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-[2rem] py-4">
      <img src="/logo.png" width={150} />

      <div className="hidden tablet:block">
        <Link
          href="/create-campagne"
          className=" bg-[#94F3E7] rounded-[26px] px-5 py-2"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
