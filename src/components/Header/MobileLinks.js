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
        <Heading>Credit</Heading>
        <DevelopmentCredit>
          <Title>Development</Title>
          <Credit>T.T.Son</Credit>
        </DevelopmentCredit>
        <FontCredit>
          <Title>Font</Title>
          <Credit>Wotfard</Credit>
        </FontCredit>
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

  /* &:last-of-type {
    margin-bottom: 50%;
  } */
`;

const MotionLinkWrapper = motion(StyledLink);

const Index = styled.p`
  font-size: ${14 / 16}rem;
`;

const Text = styled.p`
  font-size: ${28 / 16}rem;
  display: inline-block;
  text-transform: capitalize;
`;

const Footer = styled(motion.div)`
  bottom: 0px;
  padding-left: 28px;
  padding-bottom: 28px;
  position: fixed;
  align-self: flex-start;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const Heading = styled.p`
  color: var(--color-primary-text);
  grid-column: 1/2;
  grid-row: 1/-1;
`;

const DevelopmentCredit = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
`;

const FontCredit = styled.div`
  grid-column: 3/-1;
  grid-row: 1/2;
`;

const Title = styled.p`
  color: var(--color-secondary-text);
`;
const Credit = styled.p`
  color: var(--color-primary-text);
`;

export default MobileLinks;
