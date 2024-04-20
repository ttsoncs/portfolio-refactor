import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function ThirdGrid() {
  return (
    <Wrapper>
      <Text>GitHub</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px dashed var(--color-border);
  display: grid;
  grid-column: 9/11;
  grid-row: 1/4;
  place-content: center;
  padding: 28px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/2;
    grid-row: initial;
    padding: 24px;
  }
`;

const Text = styled.p`
  -webkit-text-fill-color: transparent;
  background: linear-gradient(
    to right,
    var(--color-primary-text),
    var(--color-tertiary)
  );
  background-clip: text;
  color: var(--color-primary-text);
  font-size: ${48 / 16}rem;
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${32 / 16}rem;
  }
`;

export default ThirdGrid;
