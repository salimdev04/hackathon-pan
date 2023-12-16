import React from "react";
import styles from "./Style.module.css";

const Footer = () => {
  return (
    <footer className=" tablet:flex justify-between border-t border-black px-[2rem] py-[2rem]">
      <p className={styles.hiddenOnMobile}>
        © 2023 Relume. All rights reserved.
      </p>
      <div className="tablet:flex">
        <a href="#" className={styles.footerLink}>
          Privacy Policy
        </a>
        <a href="#" className={styles.footerLink}>
          Terms of Service
        </a>
        <a href="#" className={styles.footerLink}>
          Cookies Settings
        </a>
      </div>
      <p className={[styles.hiddenOnDesktop, "text-center"].join(" ")}>
        © 2023 Relume. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
