import Image from "next/image";
import React from "react";
import styles from "@/components/Style.module.css";

const InputContainer = ({ text }: { text: string }) => {
  return (
    <div>
      <h1>{text}</h1>
      <div className={styles.inputContainer}>
        <img src="/Left.svg" />
        <input type="text" placeholder="Text" />
      </div>
      <div className={styles.inputContainer}>
        <img src="/color.svg" />
        <input type="text" placeholder="#" />
      </div>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="0%" />
      </div>
    </div>
  );
};

const page = () => {
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
        <h1>Customize</h1>
        <div>
          <button>Display</button>
          <button>Deploy</button>
        </div>
      </header>
      <div className="flex justify-between">
        <div>
          <InputContainer text="Reward 1" />
          <InputContainer text="Reward 2" />
          <InputContainer text="Reward 3" />
          <InputContainer text="Reward 1" />
          <InputContainer text="Reward 1" />
          <InputContainer text="Reward 1" />
        </div>
        <div>
          <img src="/iphone13.png" alt="" height={605} width={300} />
        </div>
      </div>
    </div>
  );
};

export default page;
