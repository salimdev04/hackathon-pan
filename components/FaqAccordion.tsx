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
            <span> Can i change the number of segements of the wheel?</span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className={styles.accordionHeading}>
          <AccordionItemButton className={styles.accordionButton}>
            <span> Can i try the platform for free?</span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          In ad velit in ex nostrud dolore cupidatat consectetur ea i
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className={styles.accordionHeading}>
          <AccordionItemButton className={styles.accordionButton}>
            <span> Does it work with any website?</span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          In ad velit in ex nostrud dolore cupidatat consectetur ea i
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className={styles.accordionHeading}>
          <AccordionItemButton className={styles.accordionButton}>
            <span>How can i contact you?</span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          In ad velit in ex nostrud dolore cupidatat consectetur ea i
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
              If i don’t have technical skills,can i use this platform easily?
            </span>
            <img src="/Icon.svg" alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className={styles.accordionPanel}>
          In ad velit in ex nostrud dolore cupidatat consectetur ea i
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
