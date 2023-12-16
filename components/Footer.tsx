import React from "react";

const Footer = () => {
  return (
    <footer className=" flex justify-between border-t border-black px-[2rem] pt-[2rem]">
      <p>© 2023 Relume. All rights reserved.</p>
      <div>
        <a href="#" className="mx-4 underline">
          Privacy Policy
        </a>
        <a href="#" className="mx-4 underline">
          Terms of Service
        </a>
        <a href="#" className="mx-4 underline">
          Cookies Settings
        </a>
      </div>
    </footer>
  );
};

export default Footer;
