import { QUERIES } from "@/constants";
import page from "/public/images/page.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import right from "/public/images/right.svg";
import styled from "styled-components";

function FourthGrid() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={page}
            fill={true}
            alt="Page"
          />
        </ImageWrapper>
        <TextWrapper>
          <Text>Resume</Text>
          <Path>TrinhTheSon.pdf</Path>
          {/* <Link
            href="https://github.com/ttsoncs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyleArrow
              src={right}
              alt="Right arrow"
            />
          </Link> */}
        </TextWrapper>
      </Wrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px dashed var(--color-border);
  grid-column: 11 / -1;
  grid-row: 1 / 6;
  padding-inline: 28px;
  padding-block: 20px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 2 / -1;
    grid-row: 10 / 14;
    padding-inline: 24px;
    padding-block: 16px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "first" "second";
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
  gap: 8px;

  /*  */
  /* aspect-ratio: 1/1; */
`;

const ImageWrapper = styled.div`
  grid-area: first;
  position: relative;
`;

const TextWrapper = styled.div`
  align-self: end;
  grid-area: second;
  overflow: hidden;
`;

const Text = styled.p`
  color: var(--color-primary-text);
  font-size: ${20 / 16}rem;
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
  }
`;

const Path = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: var(--color-secondary-text);
  display: -webkit-box;
  font-size: ${16 / 16}rem;
  line-height: 1.25;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const StyleArrow = styled(Image)`
  height: 28px;
  width: 28px;

  @media ${QUERIES.phoneAndSmaller} {
    height: 24px;
    width: 24px;
  }
`;

export default FourthGrid;
