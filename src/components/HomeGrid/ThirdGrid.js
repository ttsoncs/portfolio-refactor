import { QUERIES } from "@/constants";
import box from "/public/images/package.svg";
import right from "/public/images/right.svg";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

function ThirdGrid() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <StyledImage
          src={box}
          alt="Box"
        />
        <TextWrapper>
          <Text>GitHub</Text>
          <StyledLink
            href="https://github.com/ttsoncs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyleArrow
              src={right}
              alt="Right arrow"
            />
          </StyledLink>
        </TextWrapper>
      </Wrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.section`
  aspect-ratio: 1/1;
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px dashed var(--color-border);
  grid-column: 9/11;
  grid-row: 1/4;
  padding-inline: 28px;
  padding-block: 20px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/2;
    grid-row: initial;
    padding-inline: 24px;
    padding-block: 16px;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  width: 100%;
`;

const Text = styled.p`
  color: var(--color-primary-text);
  font-size: ${20 / 16}rem;
  font-weight: var(--font-weight-medium);
  grid-row: 1/2;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
  }
`;

const TextWrapper = styled.div`
  align-self: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)``;

const StyledImage = styled(Image)`
  grid-row: 2/-1;
  height: 100%;
  width: 100%;
`;

const StyleArrow = styled(Image)`
  height: 28px;
  width: 28px;

  @media ${QUERIES.phoneAndSmaller} {
    height: 24px;
    width: 24px;
  }
`;

export default ThirdGrid;
