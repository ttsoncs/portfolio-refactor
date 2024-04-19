import { AnimatePresence, motion } from "framer-motion";
import { QUERIES } from "@/constants";
import { TEXTS } from "@/constants";
import React from "react";
import styled from "styled-components";

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
    transition: {
      opacity: { duration: 2, delay: 1.5 },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 1 },
    },
  },
};

function TextLoop() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      let next = index + 1;
      if (next === TEXTS.length) {
        next = 0;
      }
      setIndex(next);
    }, 5000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [index, setIndex]);

  return (
    <AnimatePresence>
      <Wrapper
        animate="center"
        exit="exit"
        initial="enter"
        key={index}
        variants={variants}
      >
        {TEXTS[index]}
      </Wrapper>
    </AnimatePresence>
  );
}

const Wrapper = styled(motion.p)`
  -webkit-text-fill-color: transparent;
  background: linear-gradient(
    to top,
    var(--color-primary-text) 0%,
    var(--color-quaternary) 75%
  );
  background-clip: text;
  color: var(--color-primary-text);
  font-size: ${48 / 16}rem;
  font-weight: var(--font-weight-medium);
  height: fit-content;
  inset: 0;
  margin: auto;
  position: absolute;
  width: fit-content;

  &::first-letter {
    text-transform: capitalize;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${40 / 16}rem;
  }
`;

export default TextLoop;
