import React from "react";

interface SubmitEmailProps {
  btnColor: string;
}

const SubmitEmail = ({ btnColor }: SubmitEmailProps) => {
  return (
    <div className="max-w-[513px] flex">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="rounded-[26px] px-4 py-1 w-full h-[48px] mr-4 border-black border"
      />
      <button className={`${btnColor} rounded-[26px] px-6 py-3`}>Submit</button>
    </div>
  );
};

export default SubmitEmail;
