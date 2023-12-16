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
            <span> What is our solution?</span>
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
            <span> How does it work?</span>
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
            <span> What are the benefits?</span>
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
            <span> Is it customizable?</span>
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
            <span> How can I get started?</span>
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
