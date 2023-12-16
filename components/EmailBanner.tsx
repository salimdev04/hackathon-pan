import React from "react";
import SubmitEmail from "./SubmitEmail";
import styles from "./Style.module.css";

const EmailBanner = () => {
  return (
    <section className="tablet:bg-[#4DA9C6] p-[2rem] tablet:p-[8rem] tablet:flex justify-between tablet:text-white">
      <div className="max-w-[600px] hidden tablet:block font-bold text-3xl">
        <p className={styles.hiddenOnMobile}>
          Empower your brand with [Your Platform Name], where positive
          reinforcement meets engagement excellence.
        </p>
      </div>
      <div className="max-w-[600px]">
        <div className=" tablte:font-bold font-normal tablet:text-2xl leading-normal border-l-2 border-white tablet:pl-8">
          <h1 className={styles.emailBannerTitle}>70%-80%</h1>
          <p className="pt-[2rem] pb-[4rem] tablet:p-0">
            or more, of individuals are positively influenced by some form of
            positive reinforcement
          </p>
          <p className={styles.hiddenOnDesktop}>
            Empower your brand with [Your Platform Name], where positive
            reinforcement meets engagement excellence.
          </p>
        </div>
        <div className="pt-[2rem] text-white">
          <SubmitEmail btnColor="bg-black" />
        </div>
      </div>
    </section>
  );
};

export default EmailBanner;
