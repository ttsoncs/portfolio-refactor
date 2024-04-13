import { motion } from "framer-motion";
import React from "react";

function Hamburger({ isOpen, size = 24 }) {
  return (
    <svg
      fill="transparent"
      height={size}
      stroke="var(--color-secondary-text)"
      strokeWidth="2.25"
      viewBox="0 0 24 24"
      width={size}
    >
      <motion.path
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          open: { d: "M 10 18 L 22 6" },
          closed: { d: "M 8 6 L 24 6" },
        }}
      />
      <motion.path
        animate={isOpen ? "open" : "closed"}
        d="M 8 12 L 24 12"
        initial={false}
        transition={{ duration: 0.3 }}
        variants={{
          open: { opacity: 0 },
          closed: { opacity: 1 },
        }}
      />
      <motion.path
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          open: { d: "M 10 6 L 22 18" },
          closed: { d: "M 8 18 L 24 18" },
        }}
      />
    </svg>
  );
}

export default Hamburger;
