import { QUERIES } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function ThirdGrid() {
  return (
    <Wrapper>
      <StyledImage
        src="/images/daisy.webp"
        height={512}
        width={512}
        alt="daisy flower"
      ></StyledImage>
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
  padding: 28px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px;
    grid-column: 1/2;
    grid-row: initial;
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

export default ThirdGrid;
