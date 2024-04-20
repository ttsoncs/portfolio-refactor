import { QUERIES } from "@/constants";
import box from "/public/images/package.svg";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function ThirdGrid() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <StyledImage
          src={box}
          alt="Box"
        />
        <Text>GitHub</Text>
      </Wrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px dashed var(--color-border);
  grid-column: 9/11;
  grid-row: 1/4;
  padding: 28px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/2;
    grid-row: initial;
    padding: 24px;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  aspect-ratio: 1/1;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  width: 100%;
`;

const Text = styled.p`
  align-self: end;
  color: var(--color-primary-text);
  font-size: ${20 / 16}rem;
  font-weight: var(--font-weight-medium);
  grid-row: 3/-1;
  line-height: 1;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
  }
`;

const StyledImage = styled(Image)`
  grid-row: 1/3;
  height: 100%;
  width: 100%;
`;

export default ThirdGrid;
