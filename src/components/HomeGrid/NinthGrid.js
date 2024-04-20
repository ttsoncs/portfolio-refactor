import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function NinthGrid() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px dashed var(--color-border);
  grid-column: 1/3;
  grid-row: 8/11;
  display: flex;
  flex-direction: column;
  padding: 28px;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 2/-1;
    grid-row: initial;
    padding: 24px;
  }
`;

const Text = styled.p`
  color: var(--color-primary-text);
  font-size: ${20 / 16}rem;
  font-weight: var(--font-weight-normal);
  /* Chrome bug, when it fix, delete white-space: nowrap */
  white-space: nowrap;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
  }
`;

const Number = styled.p`
  color: var(--color-primary-text);
  font-size: ${80 / 16}rem;
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${48 / 16}rem;
  }
`;

export default NinthGrid;
