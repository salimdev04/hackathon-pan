"use client";

import Image from "next/image";
import React from "react";
import styles from "@/components/Style.module.css";

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

const page = () => {
  const onLoadSpin = () => {
    console.log("On click");
    const weelElement = document.getElementById("weel");
    weelElement!.classList.add("rotating");

    // Remove the class after another 20 seconds
    setTimeout(function () {
      weelElement!.classList.remove("rotating");
    }, 5000);
  };

  return (
    <div className=" min-h-screen w-full relative">
      <Image
        src="/custom-bg.svg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className=" -z-20"
      />

      <header className="flex justify-between px-[2rem] py-[1rem]">
        <h1 className=" text-[48px] font-bold">Customize</h1>
        <div>
          <button className={styles.customBtnNav}>Display</button>
          <button className={styles.customBtnNav}>Deploy</button>
        </div>
      </header>
      <div className="flex justify-between p-[4rem]">
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
              <h1 className={styles.customTitle}>Coupon Code</h1>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 tablet:grid-cols-3 gap-[24px] ">
            <SpinContainer text="Spin Button" />
          </div>
        </div>

        <div className="relative hidden tablet:block">
          <img src="/iphone13.png" alt="" height={605} width={350} />

          <img
            id="weel"
            src="/weel-red.svg"
            className="absolute z-10 top-[20%] right-7"
          />
          <img
            src="/guille-black.png"
            className="absolute z-10 top-[38%] right-5"
          />

          <button
            onClick={() => onLoadSpin()}
            className="px-6 py-4 bg-[#85D2EB] rounded-[26px] absolute bottom-[25%] left-[35%]"
          >
            SPIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
