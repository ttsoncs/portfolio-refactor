"use client";

import React from "react";
import styled from "styled-components";

function MaxWidthWrapper({ children }) {
  return (
    <Wrapper>
      <PatternWrapper>
        <Pattern />
      </PatternWrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-inline: auto;
  max-width: 1500px;
  min-height: 100%;
  padding-inline: 28px;
  position: relative;
`;

const PatternWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
`;

const Pattern = styled.div`
  background-image: linear-gradient(
      to right,
      var(--color-grid) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, var(--color-grid) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: radial-gradient(
    ellipse 60% 50% at 50% 0%,
    var(--color-background) 70%,
    transparent 100%
  );
  position: absolute;
  inset: 0;
`;

export default MaxWidthWrapper;
