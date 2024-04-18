import { QUERIES } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import TextLoop from "@/components/TextLoop";
import megaphone from "/public/images/megaphone.webp";

function SecondGrid() {
  return (
    <Wrapper>
      <StyledImage src={megaphone} alt="Megaphone" />
      <TextLoop />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 5/9;
  grid-row: 1/3;
  position: relative;

  @media ${QUERIES.phoneAndSmaller} {
    aspect-ratio: 16 / 5;
    grid-column: 1 / -1;
    grid-row: initial;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  height: 96px;
  width: 96px;
  top: 25%;
  left: -5%;
  transform: rotate(-10deg);

  @media ${QUERIES.phoneAndSmaller} {
    height: 72px;
    width: 72px;
    top: 25%;
  }
`;

export default SecondGrid;
