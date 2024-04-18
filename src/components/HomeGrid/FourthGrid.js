import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function FourthGrid() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.section`
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

export default FourthGrid;
