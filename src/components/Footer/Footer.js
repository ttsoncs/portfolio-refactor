"use client";

import { DAYS } from "@/constants";
import { QUERIES } from "@/constants";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <LinkWrapper>
        <StyledLink href="/terms">Terms of Use</StyledLink>
        <StyledLink href="/privacy">Privacy Policy</StyledLink>
      </LinkWrapper>
      <Text>© 2024 Trinh The Son. All rights reserved.</Text>
      <Text>
        Enjoy the rest of your {DAYS[new Date().getDay()]}!
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
    color: var(--color-secondary-text);
    display: flex;
    flex-direction: column;
    font-size: ${14 / 16}rem;
    justify-content: center;
    padding-block: 32px;
    padding-inline: 28px;
  }
`;

const Text = styled.p`
  text-align: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 12px;
`;

const StyledLink = styled(Link)`
  color: var(--color-secondary-text);
  text-decoration: none;
`;

export default Footer;
