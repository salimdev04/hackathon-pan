"use client";

import Link from "next/link";
import Image from "next/image";
import { Dancing_Script, Montserrat } from "next/font/google";

import { usePathname } from "next/navigation";
import { IoHomeOutline, IoStarOutline } from "react-icons/io5";
import { GrAnalytics } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

const font = Dancing_Script({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: IoHomeOutline,
    href: "/create-campagne",
    color: "text-sky-500",
  },
  {
    label: "Ask Questions",
    icon: IoStarOutline,
    href: "#",
    color: "text-violet-500",
  },
  {
    label: "Mes Programmes",
    icon: GrAnalytics,
    color: "text-pink-700",
    href: "#",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white text-black">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <img src="/logo.png" width={190} height={71} />
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-black/10 rounded-lg transition"
              }
            >
              <div className="flex items-center flex-1">
                <route.icon size={30} />

                <span className="ml-4 text-lg">{route.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center p-4 border-t border-black">
        <FaUserCircle size={50} color={"gray"} />
        <div className="ml-4 ">
          <p className=" font-bold">Name Surname</p>
          <p>Name@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
