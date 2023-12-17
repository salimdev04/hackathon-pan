import Image from "next/image";
import React from "react";
import SubmitEmail from "./SubmitEmail";
import Styles from "./Style.module.css";

const Hero = () => {
  return (
    <section className=" text-black tablet:text-white relative w-full">
      <Image
        src="/hero-bg.svg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="hidden tablet:block -z-20"
      />
      <div className="p-[2rem] tablet:px-[8rem] tablet:py-[9rem] flex justify-between">
        <div>
          <div className="max-w-[616px]">
            <h1 className=" text-[56px] font-bold py-[2rem]">
              Unleash Playful Engagement with Gamified Marketing
            </h1>
            <p className=" text-lg">
              Elevate your marketing effortlessly with our no-code gamification
              platform, designed to triple your engagement and CTR. Now you can
              embrace the power of playful ads and transform clicks into
              meaningful customer connections.
            </p>
          </div>
          <div className="pt-[4rem]">
            <div className={[Styles.hiddenOnMobile, " text-black"].join(" ")}>
              <SubmitEmail btnColor="bg-[#94F3E7]" />
            </div>
            <div className={Styles.hiddenOnDesktop}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className=" px-4 py-1 w-full h-[48px] border-black border"
              />
              <button className={` bg-black text-white my-4 py-4 w-full`}>
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="hidden tablet:block relative">
          <img src="/home-weel.png" className={Styles.rotating} />
          <img src="aiguille.svg" className=" absolute -right-[5%] top-[45%]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
