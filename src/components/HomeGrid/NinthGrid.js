import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function NinthGrid() {
  return (
    <Wrapper>
      <Text>VIEWS</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  aspect-ratio: 1 / 1;
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  display: grid;
  grid-column: 1/3;
  grid-row: 8/11;
  place-content: center;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 2/-1;
    grid-row: initial;
  }
`;

const Text = styled.p`
  color: var(--color-primary-text);
  font-size: ${48 / 16}rem;
  font-weight: var(--font-weight-semibold);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
  }
`;

export default NinthGrid;
