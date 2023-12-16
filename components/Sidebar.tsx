"use client";

import Link from "next/link";
import Image from "next/image";
import { Dancing_Script, Montserrat } from "next/font/google";

import { usePathname } from "next/navigation";

const font = Dancing_Script({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: "",
    href: "/create-campagne",
    color: "text-sky-500",
  },
  {
    label: "Ask Questions",
    icon: "",
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Mes Programmes",
    icon: "",
    color: "text-pink-700",
    href: "/programmes",
  },
  {
    label: "My Articles",
    icon: "",
    color: "text-orange-700",
    href: "/my-articles",
  },
  {
    label: "Settings",
    icon: "",
    href: "/settings",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white text-black">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className={"text-[3rem] font-bold"}>L3EB</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
              }
            >
              <div className="flex items-center flex-1">
                <img src={route.icon} className={"h-5 w-5 mr-3"} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
