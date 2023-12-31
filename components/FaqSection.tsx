import React from "react";
import commonStyles from "@/components/Style.module.css";
import { FaqAccordion } from "./FaqAccordion";

const FaqSection = () => {
  return (
    <section
      className={[
        commonStyles.padding,
        "max-w-[768px] mx-auto text-center",
      ].join(" ")}
    >
      <h1 className={[commonStyles.boldText, "text-4xl"].join(" ")}>FAQs</h1>
      <div>
        <img
          src="/image-2.png"
          alt=""
          width={325}
          className={["mx-auto ", commonStyles.hiddenOnMobile].join(" ")}
        />
        <p className={[commonStyles.lightText, "py-6 text-lg"].join(" ")}>
          If you have a question feel free to contact us
        </p>
      </div>
      <div className="my-24">
        <FaqAccordion />
      </div>
      <div>
        <h1 className={[commonStyles.boldText, "text-[32px]"].join(" ")}>
          Still have questions?
        </h1>
        <p
          className={[commonStyles.lightText, " text-[16px] mt-4 mb-6"].join(
            " "
          )}
        >
          Click this button
        </p>
        <button className={commonStyles.blackBtn}>Contact US</button>
      </div>
    </section>
  );
};

export default FaqSection;
