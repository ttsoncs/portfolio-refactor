import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";
import TextLoop from "@/components/TextLoop";

function SecondGrid() {
  return (
    <Wrapper>
      <TextLoop />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 5 / 9;
  grid-row: 1 / 4;
  position: relative;
  padding: 28px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1 / -1;
    grid-row: 7 / 10;
    padding: 24px;
  }
`;

export default SecondGrid;
