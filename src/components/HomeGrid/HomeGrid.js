"use client";

import { QUERIES } from "@/constants";
import EighthGrid from "./EighthGrid";
import FifthGrid from "./FifthGrid";
import FirstGrid from "./FirstGrid";
import TenthGrid from "./TenthGrid";
import FourthGrid from "./FourthGrid";
import NinthGrid from "./NinthGrid";
import React from "react";
import SecondGrid from "./SecondGrid";
import SixthGrid from "./SixthGrid";
import styled from "styled-components";
import ThirdGrid from "./ThirdGrid";

function HomeGrid() {
  return (
    <Wrapper>
      <FirstGrid />
      <SecondGrid />
      <ThirdGrid />
      <FourthGrid />
      <FifthGrid />
      <SixthGrid />
      <Box7>7</Box7>
      <EighthGrid />
      <NinthGrid />
      <TenthGrid />
      <Box11>11</Box11>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(16, 1fr);

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(45, 1fr);
  }
`;

const Box7 = styled.div`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 5 / 9;
  grid-row: 4 / 14;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1 / -1;
    grid-row: 22 / 32;
  }
`;

const Box11 = styled.div`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 9 / 13;
  grid-row: 11 / -1;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1 / -1;
    grid-row: 40 / -1;
  }
`;

export default HomeGrid;
