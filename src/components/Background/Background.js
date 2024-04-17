"use client";

import React from "react";
import styled from "styled-components";

function Background({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.body`
  background-color: var(--color-background);
  background-image: linear-gradient(to right, #80808012 1px, transparent 1px),
    linear-gradient(to bottom, #80808012 1px, transparent 1px);
  background-size: 24px 24px;
`;

export default Background;
