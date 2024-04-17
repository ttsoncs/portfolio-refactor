"use client";

import React from "react";
import styled from "styled-components";

function MaxWidthWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  margin-inline: auto;
  max-width: 1500px;
  min-height: 100%;
  padding-inline: 28px;
  position: relative;
`;

export default MaxWidthWrapper;
