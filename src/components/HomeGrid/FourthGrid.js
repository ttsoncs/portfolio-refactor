import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function FourthGrid() {
  return (
    <Wrapper>
      <Text>CV</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  display: grid;
  grid-column: 11/13;
  grid-row: 1/4;
  place-content: center;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 2/-1;
    grid-row: initial;
  }
`;

const Text = styled.p`
  color: var(--color-secondary);
  font-size: ${48 / 16}rem;
  font-weight: var(--font-weight-semibold);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
  }
`;

export default FourthGrid;
