import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Logo({ setIsOpen }) {
  return (
    <Wrapper>
      <StyledLink
        href="/"
        onClick={() => setIsOpen(false)}
      >
        ttson.
      </StyledLink>
      <Badge>Portfolio</Badge>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 2px;
`;

const StyledLink = styled(Link)`
  color: var(--color-primary-text);
  font-size: ${24 / 16}rem;
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
`;

const Badge = styled.div`
  color: var(--color-primary-text);
  font-size: ${12 / 16}rem;
  background-color: var(--color-background);
  align-self: flex-start;
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid var(--color-border);
`;

export default Logo;
