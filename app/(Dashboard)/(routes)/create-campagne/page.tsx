import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface WealSeclectCardProps {
  image: string;
  title: string;
  content: string;
}

const wealData = [
  {
    image: "/left-grille.png",
    title: "Wheel for Moroccan Fans",
    content: "Moroccan Fans",
  },
  {
    image: "/right-grille.png",
    title: "Wheel of Orange",
    content: "Orange Football fans",
  },
];

const WealSeclectCard = ({ image, title, content }: WealSeclectCardProps) => {
  return (
    <div className="w-[300px]">
      <div className="bg-[#00000040] rounded-[20px] px-8 py-12 my-8">
        <img src={image} alt="" />
      </div>
      <h3 className="text-xl font-extrabold">{title}</h3>
      <p className="text-[14px] text-white">{content}</p>
      <div>
        <Link href={"/customize"}>
          <button className=" h-[40px] bg-black rounded-[26px] px-4 w-full mt-[2rem] text-white">
            Select
          </button>
        </Link>
      </div>
    </div>
  );
};

const CreateCampagnePage = () => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full tablet:flex tablet:w-72 tablet:flex-col tablet:fixed tablet:inset-y-0 z-80 bg-gray-900">
        <Sidebar />
      </div>
      <div className="relative h-screen text-black px-[8rem] py-[4rem] ml-72">
        <Image
          src="/creeat-camp.svg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className=" -z-20 blur-[10px]"
        />
        <h1 className=" text-[48px] font-bold">Templates</h1>
        <p className=" text-[20px]">
          Use the following templates to engage your fans with gamified Ads
        </p>
        <div className="flex justify-between">
          {wealData.map((weal, idx) => (
            <WealSeclectCard
              key={idx}
              image={weal.image}
              title={weal.title}
              content={weal.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateCampagnePage;
