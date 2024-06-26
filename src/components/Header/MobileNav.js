import { motion, AnimatePresence } from "framer-motion";
import { QUERIES } from "@/constants";
import { RemoveScroll } from "react-remove-scroll";
import MobileLinks from "./MobileLinks";
import React from "react";
import styled from "styled-components";

const variants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

function MobileNav({ isOpen, handelClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <Wrapper
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            onClick={handelClick}
            initial="closed"
            variants={variants}
          >
            <MobileLinks handelClick={handelClick}></MobileLinks>
          </Wrapper>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}

const Wrapper = styled(motion.nav)`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    inset: 0;
    justify-content: center;
    position: fixed;
  }
`;

export default MobileNav;
