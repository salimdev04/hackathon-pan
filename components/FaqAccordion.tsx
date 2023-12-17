"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import styles from "./FaqAccordion.module.css";

export const FaqAccordion = () => {
  return (
    <Accordion className="max-w-[768px]">
      <AccordionItem>
        <AccordionItemHeading className={styles.accordionHeading}>
          <AccordionItemButton className={styles.accordionButton}>
            <span> What types of games can be created with your platform?</span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          Our platform supports a wide array of game types, including quizzes,
          spin-to-win wheels, scratch cards, and more. You can customize each
          game to fit your campaign goals and engage your audience.
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className={styles.accordionHeading}>
          <AccordionItemButton className={styles.accordionButton}>
            <span>Is coding knowledge required to use the platform?</span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          Not at all! Our platform is designed with a no-code approach, making
          it easy for anyone to create engaging gamified ads without any
          technical expertise.
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className={styles.accordionHeading}>
          <AccordionItemButton className={styles.accordionButton}>
            <span>
              Can I integrate your platform with my existing marketing tools?
            </span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          Yes, our platform offers seamless integration with many popular
          marketing tools and CRM systems, ensuring a smooth workflow within
          your existing marketing ecosystem.
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className={styles.accordionHeading}>
          <AccordionItemButton className={styles.accordionButton}>
            <span>How does gamification increase engagement and CTR?</span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          Gamification leverages the natural human desire for competition and
          achievement. By incorporating game elements into ads, users are more
          likely to interact, leading to higher engagement and click-through
          rates.
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading
          className={[styles.accordionHeading, "border-b border-black"].join(
            " "
          )}
        >
          <AccordionItemButton className={styles.accordionButton}>
            <span>What customization options are available for the games?</span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          You can customize everything from the game mechanics to the visual
          elements. Add your branding, choose different rewards, and set up the
          game rules to match your campaign objectives.
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading
          className={[styles.accordionHeading, "border-b border-black"].join(
            " "
          )}
        >
          <AccordionItemButton className={styles.accordionButton}>
            <span>
              How do you ensure the games are fair and compliant with
              regulations?
            </span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          We prioritize fairness and compliance. Our platform includes features
          to set odds, limit participation, and ensure that all games comply
          with legal standards and best practices.
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading
          className={[styles.accordionHeading, "border-b border-black"].join(
            " "
          )}
        >
          <AccordionItemButton className={styles.accordionButton}>
            <span>
              What analytics and reporting capabilities does your platform
              offer?
            </span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          Our comprehensive analytics dashboard provides real-time data on user
          interactions, engagement levels, conversion rates, and more, allowing
          you to measure success and optimize campaigns.
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading
          className={[styles.accordionHeading, "border-b border-black"].join(
            " "
          )}
        >
          <AccordionItemButton className={styles.accordionButton}>
            <span>
              Is it possible to run A/B tests on different gamified ads?
            </span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          Yes, A/B testing is supported by our platform, enabling you to test
          different versions of your games to see what resonates best with your
          audience and drives results.
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading
          className={[styles.accordionHeading, "border-b border-black"].join(
            " "
          )}
        >
          <AccordionItemButton className={styles.accordionButton}>
            <span>
              What support and training resources do you provide for new users?
            </span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          We offer a variety of support and training resources, including
          tutorials, webinars, and a dedicated support team to ensure you can
          use our platform to its full potential
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
