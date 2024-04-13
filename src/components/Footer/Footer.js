"use client";

import { DAYS } from "@/constants";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <LinkWrapper>
        <LinkItem href="/terms">Terms of Use</LinkItem>
        <LinkItem href="/privacy">Privacy Policy</LinkItem>
      </LinkWrapper>
      <TextWrapper>© 2024 Trinh The Son. All rights reserved.</TextWrapper>
      <TextWrapper>
        Enjoy the rest of your {DAYS[new Date().getDay()]}!
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: none;

  @media ${(props) => props.theme.queries.phoneAndSmaller} {
    align-items: center;
    color: var(--color-secondary-text);
    display: flex;
    flex-direction: column;
    font-size: ${14 / 16}rem;
    justify-content: center;
    margin-inline: 28px;
    max-width: 1500px;
    padding-block: 32px;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
`;

const LinkItem = styled(Link)`
  color: var(--color-secondary-text);
  text-decoration: none;
`;

export default Footer;
