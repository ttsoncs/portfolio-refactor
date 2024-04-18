"use client";

import { QUERIES } from "@/constants";
import EighthGrid from "./EighthGrid";
import FifthGrid from "./FifthGrid";
import FirstGrid from "./FirstGrid";
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
      <NinthGrid />
      <SixthGrid />
      <Box7>7</Box7>
      <EighthGrid />
      <Box10>10</Box10>
      <Box11>11</Box11>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
  }
`;

const Box7 = styled.div`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 5/9;
  grid-row: 3/9;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

const Box9 = styled.div`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 1/3;
  grid-row: 8/11;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

const Box10 = styled.div`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 3/9;
  grid-row: 9/11;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

const Box11 = styled.div`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 9/13;
  grid-row: 7/11;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

export default HomeGrid;
