import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import flower from "/public/images/flower.svg";

function Logo({ setIsOpen }) {
  return (
    <StyledLink
      href="/"
      onClick={() => setIsOpen(false)}
    >
      ttson.
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  color: var(--color-primary-text);
  font-size: ${24 / 16}rem;
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export default Logo;
