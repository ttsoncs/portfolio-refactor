import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import github from "/public/images/github.svg";

function ThirdGrid() {
  return (
    <Wrapper>
      <StyledImage
        src={github}
        alt="Github link"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  aspect-ratio: 1 / 1;
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 9/11;
  grid-row: 1/4;
  display: grid;
  place-content: center;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/2;
    grid-row: initial;
  }
`;

const StyledImage = styled(Image)`
  height: 80px;
  width: 80px;

  @media ${QUERIES.phoneAndSmaller} {
    height: 72px;
    width: 72px;
  }
`;

export default ThirdGrid;
