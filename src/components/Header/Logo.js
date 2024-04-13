import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Logo({ setIsOpen }) {
  return (
    <Wrapper
      href="/"
      onClick={() => setIsOpen(false)}
    >
      ttson.
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  color: var(--color-primary-text);
  font-size: ${24 / 16}rem;
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
`;

export default Logo;
