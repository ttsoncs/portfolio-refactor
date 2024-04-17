import React from "react";
import { MotionWrapper } from "@/lib/framer";

const variants = {
  enter: {
    y: 40,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      y: { stiffness: 100 },
    },
  },
};

function Template({ children }) {
  return (
    <MotionWrapper
      initial="enter"
      animate="center"
      variants={variants}
    >
      {children}
    </MotionWrapper>
  );
}

export default Template;
