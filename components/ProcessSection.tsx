import { Righteous } from "next/font/google";
import React from "react";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

interface ProcessCardProps {
  id: number;
  title: string;
  content: string;
}

const processData = [
  {
    id: 1,
    title: "Create Engaging Campaigns",
    content:
      "Start by selecting a template or building your own gamified ad. Define the game mechanics, rewards, and interaction elements to create an engaging experience aligned with your marketing goals.",
  },
  {
    id: 2,
    title: "Customize for Your Brand",
    content:
      "Infuse your brand identity into the campaign by adding logos, imagery, and messaging that align with your brand's tone. Adjust game dynamics to suit your target audience, enhancing engagement.",
  },
  {
    id: 3,
    title: "Launch Your Tailored Campaign",
    content:
      "Once your campaign is ready, initiate its launch to captivate your audience right away. Your unique, engaging advertisement is set to create an immediate impact and connect with your audience.",
  },
];

const ProcessCard = ({ id, title, content }: ProcessCardProps) => {
  return (
    <div>
      <h1
        className={[
          righteous.className,
          "text-[96px] text-center text-[#4DA9C6]",
        ].join(" ")}
      >
        {id}
      </h1>
      <h3 className="py-4 font-bold text-2xl">{title}</h3>
      <p className=" font-normal">{content}</p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="flex justify-between gap-20 p-[8rem]">
      {processData.map((process, idx) => (
        <ProcessCard
          key={idx}
          id={process.id}
          title={process.title}
          content={process.content}
        />
      ))}
    </section>
  );
};

export default ProcessSection;
