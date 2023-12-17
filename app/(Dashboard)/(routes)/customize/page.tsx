"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "@/components/Style.module.css";
import Navbar from "@/components/Navbar";

const RewardContainer = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className={styles.customTitle}>{text}</h1>
      <div className={styles.inputContainer}>
        <img src="/Left.svg" />
        <input type="text" className={styles.input} placeholder="Text" />
      </div>
      <div className={styles.inputContainer}>
        <img src="/color.svg" />
        <input type="color" className={styles.input} placeholder="#" />
      </div>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} placeholder="0%" />
      </div>
    </div>
  );
};
const SpinContainer = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className={styles.customTitle}>{text}</h1>
      <div className={styles.inputContainer}>
        <img src="/Left.svg" />
        <input type="text" className={styles.input} placeholder="Text" />
      </div>
      <div className={styles.inputContainer}>
        <img src="/blue.svg" />
        <input type="color" className={styles.input} placeholder="#" />
      </div>
    </div>
  );
};
const BgContainer = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className={styles.customTitle}>{text}</h1>
      <div className={styles.inputContainer}>
        <img src="/red.svg" />
        <input type="color" className={styles.input} placeholder="#" />
      </div>
    </div>
  );
};

const CustomizePage = () => {
  const [switchIphone, setSwitch] = useState(false);
  const onLoadSpin = () => {
    const weelElement = document.getElementById("weel");
    const firstIphoneWrapper = document.getElementById("firstIphoneWrapper");
    weelElement!.classList.add("rotating");

    // Remove the class after another 20 seconds
    setTimeout(function () {
      weelElement!.classList.remove("rotating");
      setSwitch(true);
    }, 5000);
  };

  return (
    <div className=" min-h-screen w-full relative pb-[4rem]">
      <Image
        src="/custom-bg.svg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className=" -z-20"
      />

      <Navbar text="Go Back" />

      <hr />

      <header className="flex justify-between p-[4rem]">
        <h1 className=" text-[48px] font-bold">Customize</h1>
        <div>
          <button
            onClick={() => setSwitch(false)}
            className={styles.customBtnNav}
          >
            Display
          </button>
          <button className={styles.customBtnNav}>Deploy</button>
        </div>
      </header>
      <div className="flex justify-between px-[4rem]">
        <div className="w-full">
          <div className=" w-full grid grid-cols-1 tablet:grid-cols-3 gap-[24px]">
            <RewardContainer text="Reward 1" />
            <RewardContainer text="Reward 2" />
            <RewardContainer text="Reward 3" />
            <RewardContainer text="Reward 4" />
            <RewardContainer text="Reward 5" />
          </div>
          <div className="w-full grid grid-cols-1 tablet:grid-cols-3 gap-[24px] py-[2rem]">
            <BgContainer text="Background" />
            <div>
              <h1 className={styles.customTitle}>Logo</h1>
            </div>
            <div>
              <h1 className={styles.customTitle}>Coupon Code</h1>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 tablet:grid-cols-3 gap-[24px] ">
            <SpinContainer text="Spin Button" />
          </div>
        </div>

        <div
          id="firstIphoneWrapper"
          className={`${switchIphone ? "hidden" : ""} relative`}
        >
          <img src="/iphone13.svg" alt="" height={605} width={550} />

          <img
            id="weel"
            src="/weel.png"
            width={320}
            className="absolute z-10 top-[30%] right-[10%]"
          />
          <img
            src="/guille-black.png"
            className="absolute z-10 top-[30%] right-[30%] -rotate-[70deg]"
            width={40}
          />
          <img
            src="/fire.svg"
            className="absolute z-10 top-[47%] right-[45%]"
            width={40}
          />

          <button
            onClick={() => onLoadSpin()}
            className="px-6 py-4 bg-[#85D2EB] rounded-[26px] absolute bottom-[10%] left-[40%] font-bold"
          >
            SPIN
          </button>
        </div>
        <img
          id="secondIphoneWrapper"
          className={`${switchIphone ? "" : "hidden"}`}
          src="/iphone13-after.svg"
          alt=""
          height={605}
          width={550}
        />
      </div>
    </div>
  );
};

export default CustomizePage;
