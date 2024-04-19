import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function NinthGrid() {
  return (
    <Wrapper>
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
  place-content: center;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding: 28px;

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
  grid-row: 3/-1;
  place-self: center;

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
  grid-row: 1/3;
  place-self: center;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${48 / 16}rem;
  }
`;

export default NinthGrid;
