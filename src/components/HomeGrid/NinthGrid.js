import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function NinthGrid() {
  return (
    <Wrapper>
      <Text></Text>
      <Number>69</Number>
      <Text>Views</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  display: grid;
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
  font-size: ${18 / 16}rem;
  font-weight: var(--font-weight-normal);
  /* Chrome bug, when it fix, delete white-space: nowrap */
  white-space: nowrap;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const Number = styled.p`
  -webkit-text-fill-color: transparent;
  background: linear-gradient(to right, #834d9b, #d04ed6);
  background-clip: text;
  color: var(--color-primary-text);
  font-size: ${64 / 16}rem;
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${48 / 16}rem;
  }
`;

export default NinthGrid;
