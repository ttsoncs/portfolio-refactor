import { LINKS } from "@/constants";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 100, velocity: -100 },
    },
  },
};

function MobileLinks({ handelClick }) {
  const pathname = usePathname();

  return (
    <>
      {LINKS.map(({ title, href }) => (
        <MotionLinkWrapper
          href={href}
          key={title}
          onClick={handelClick}
          style={{
            "--color-link":
              pathname === href
                ? "var(--color-primary-text)"
                : "var(--color-secondary-text)",
          }}
          variants={variants}
        >
          {title}
        </MotionLinkWrapper>
      ))}
      {/* <Footer variants={variants}>
        <EmailHeading>Get in touch</EmailHeading>
        <Email href="mailto:ttson.cs@gmail.com">ttson.cs@gmail.com</Email>
      </Footer> */}
    </>
  );
}

const StyledLink = styled(Link)`
  color: var(--color-link);
  font-size: ${28 / 16}rem;
  font-weight: var(--font-weight-medium);
  max-width: 75%;
  padding: 16px;
  padding-left: 32px;
  text-decoration: none;
  text-transform: capitalize;
`;

const MotionLinkWrapper = motion(StyledLink);

const Footer = styled(motion.div)`
  bottom: 0px;
  padding-left: 32px;
  padding-bottom: 28px;
  position: fixed;
`;

const EmailHeading = styled.div`
  color: var(--color-secondary-text);
  font-size: ${16 / 16}rem;
`;

const Email = styled(Link)`
  color: var(--color-secondary-text);
  font-size: ${24 / 16}rem;
  font-weight: 500;
  text-decoration: none;
`;

export default MobileLinks;
