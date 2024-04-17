"use client";

import React from "react";
import styled from "styled-components";

function Background({ children }) {
  return (
    <Wrapper>
      <PatternWrapper>
        <Pattern />
      </PatternWrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.body`
  background-color: var(--color-background);
`;

const PatternWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
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

export default Background;
