import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function SixthGrid() {
  return (
    <Wrapper>
      <Text>
        HCMC
        <br />
        VN
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  display: grid;
  grid-column: 3/5;
  grid-row: 5/9;
  place-content: center;
  text-align: center;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/-1;
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

export default SixthGrid;