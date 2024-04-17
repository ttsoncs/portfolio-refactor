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
      x: { stiffness: 100 },
    },
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      x: { stiffness: 100 },
    },
  },
};

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
          {title}
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
  align-items: center;
  color: var(--color-link);
  font-size: ${28 / 16}rem;
  font-weight: var(--font-weight-medium);
  max-width: 75%;
  padding: 20px;
  padding-left: 28px;
  text-decoration: none;
  text-transform: capitalize;

  /* &:last-of-type {
    margin-bottom: 50%;
  } */
`;

const MotionLinkWrapper = motion(StyledLink);

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
