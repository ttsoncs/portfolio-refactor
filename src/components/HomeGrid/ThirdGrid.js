import { QUERIES } from "@/constants";
import box from "/public/images/box.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import right from "/public/images/right.svg";
import styled from "styled-components";

function ThirdGrid() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <Profile>
          <Text>GitHub</Text>
          <At>@ttsoncs</At>
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
        </Profile>
        <ImageWrapper>
          <Image
            src={box}
            fill={true}
            alt="Box"
          />
        </ImageWrapper>
      </Wrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  grid-column: 9 / 11;
  grid-row: 1 / 6;
  padding-inline: 28px;
  padding-block: 20px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1 / 2;
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
`;

const Profile = styled.div`
  align-self: start;
  grid-area: first;
`;

const Text = styled.p`
  color: var(--color-primary-text);
  font-size: ${20 / 16}rem;
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
  }
`;

const At = styled.p`
  color: var(--color-secondary-text);
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

const ImageWrapper = styled.div`
  grid-area: second;
  position: relative;
`;

export default ThirdGrid;
