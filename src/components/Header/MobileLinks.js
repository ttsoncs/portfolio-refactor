import { LINKS } from "@/constants";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import localFont from "next/font/local";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 100 },
    },
  },
};

const roxborough = localFont({
  src: [
    {
      path: "../../../public/fonts/RoxboroughCF-Regular.woff2",
      weight: "400",
    },
  ],
  display: "fallback",
});

function MobileLinks({ handelClick }) {
  const pathname = usePathname();

  return (
    <>
      {LINKS.map(({ title, href }, index) => (
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
          <Index>0{index + 1}</Index>
          <Text>{title}</Text>
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
  font-weight: var(--font-weight-medium);
  max-width: 75%;
  padding: 20px;
  padding-right: 28px;
  text-decoration: none;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const MotionLinkWrapper = motion(StyledLink);

const Index = styled.p`
  font-size: ${16 / 16}rem;
`;

const Text = styled.p`
  font-size: ${28 / 16}rem;
  display: inline-block;
  text-transform: capitalize;
`;

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
