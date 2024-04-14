"use client";

import { QUERIES } from "@/constants";
import EighthGrid from "./EighthGrid";
import FirstGrid from "./FirstGrid";
import ThirdGrid from "./ThirdGrid";
import React from "react";
import SecondGrid from "./SecondGrid";
import styled from "styled-components";

function HomeGrid() {
  return (
    <Wrapper>
      <FirstGrid />
      <SecondGrid />
      <ThirdGrid />
      <Box4>4</Box4>
      <EighthGrid>8</EighthGrid>
      {/* <Box5>5</Box5>
      <Box6>6</Box6>
      <Box7>7</Box7>
      <Box9>9</Box9>
      <Box10>10</Box10>
      <Box11>11</Box11>  */}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 12px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;
  }
`;

const Box4 = styled.div`
  aspect-ratio: 1 / 1;
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 11/13;
  grid-row: 1/4;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 2/-1;
    grid-row: initial;
  }
`;

const Box5 = styled.div`
  border: 1px solid var(--color-border);
  grid-column: 1/3;
  grid-row: 5/8;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

const Box6 = styled.div`
  border: 1px solid var(--color-border);
  grid-column: 3/5;
  grid-row: 5/9;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

const Box7 = styled.div`
  border: 1px solid var(--color-border);
  grid-column: 5/9;
  grid-row: 3/9;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

const Box9 = styled.div`
  border: 1px solid var(--color-border);
  grid-column: 1/3;
  grid-row: 8/11;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

const Box10 = styled.div`
  border: 1px solid var(--color-border);
  grid-column: 3/9;
  grid-row: 9/11;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

const Box11 = styled.div`
  border: 1px solid var(--color-border);
  grid-column: 9/13;
  grid-row: 6/11;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: initial;
    grid-row: initial;
  }
`;

export default HomeGrid;
