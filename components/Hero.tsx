import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" relative h-[881px] w-full">
      <Image
        src="/hero-bg.svg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className=" -z-20"
      />
      <div className="px-[8rem] py-[9rem]">
        <div className="text-white max-w-[616px]">
          <h1 className=" text-[56px] font-bold">
            Gamify Your Ads, Engage Your Community!
          </h1>
          <p className=" text-lg">
            Transform your ads into thrilling games that captivate audiences!
            Elevate engagement, spark excitement, and drive conversions with our
            gamified advertising platform. Revolutionize your approach and stand
            out in the digital realm today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
