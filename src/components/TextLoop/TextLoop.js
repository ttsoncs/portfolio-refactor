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
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 40,
    },
  },
};

function TextLoop() {
  const [index, setIndex] = React.useState(0);
  const [isInitial, setIsInitial] = React.useState(true);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      let next = index + 1;
      if (next === TEXTS.length) {
        next = 0;
      }
      setIndex(next);
    }, 6000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [index, setIndex]);

  React.useEffect(() => {
    setIsInitial(false);
  }, []);

  return (
    <AnimatePresence>
      <Wrapper
        animate="center"
        exit="exit"
        initial={isInitial ? "false" : "enter"}
        key={index}
        transition={{
          opacity: { duration: 0.5, delay: 1.5 },
        }}
        variants={variants}
      >
        {TEXTS[index]}
      </Wrapper>
    </AnimatePresence>
  );
}

const Wrapper = styled(motion.p)`
  color: var(--color-secondary-text);
  font-size: ${48 / 16}rem;
  font-weight: var(--font-weight-medium);
  height: fit-content;
  inset: 0;
  margin: auto;
  position: absolute;
  width: fit-content;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
  }
`;

export default TextLoop;
