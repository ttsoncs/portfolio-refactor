import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function FifthGrid() {
  return (
    <Wrapper>
      <Text></Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  display: grid;
  grid-column: 1 / 3;
  grid-row: 7 / 12;
  place-content: center;
  text-align: center;
  padding: 28px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1 / 2;
    grid-row: 14 / 18;
    padding: 24px;
  }
`;

const Text = styled.p`
  color: var(--color-primary-text);
  font-size: ${48 / 16}rem;
  font-weight: var(--font-weight-medium);
  line-height: 1.2;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
  }
`;

export default FifthGrid;
