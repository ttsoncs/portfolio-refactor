"use client";

import { BREAKPOINTS } from "@/constants";
import React from "react";
import styled from "styled-components";

function MaxWidthWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  margin-inline: auto;
  max-width: ${BREAKPOINTS.laptopMax}px;
  min-height: 100%;
  padding-inline: 28px;
  position: relative;
`;

export default MaxWidthWrapper;
