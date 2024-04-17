"use client";

import { QUERIES, BREAKPOINTS } from "@/constants";
import React from "react";
import styled from "styled-components";

function MaxWidthWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  margin-inline: auto;
  max-width: ${BREAKPOINTS.laptopMax * 0.85}px;
  min-height: 100%;
  padding-inline: 28px;
  position: relative;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: ${BREAKPOINTS.tabletMax * 0.8}px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    max-width: ${BREAKPOINTS.phoneMax * 0.75}px;
  }
`;

export default MaxWidthWrapper;
