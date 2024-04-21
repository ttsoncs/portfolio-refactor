import { QUERIES } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import verified from "/public/images/verified.svg";

function FirstGrid() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <FirstBox>
          <AvatarWrapper>
            <StyledImage
              src="/images/emoji.svg"
              fill={true}
              alt="Picture of Trinh The Son"
            />
          </AvatarWrapper>
          <Information>
            <NameWrapper>
              <Name>Trinh The Son</Name>
              <Badge
                src={verified}
                alt="Verified badge"
              />
            </NameWrapper>
            <WorkStatus>Available for work</WorkStatus>
          </Information>
        </FirstBox>
        <SecondBox>
          <Tweet>
            Welcome to my portfolio! Explore my work and discover the passion
            and creativity behind it. Feel free to reach out if you have any
            questions or opportunities to collaborate. Enjoy your visit!
          </Tweet>
        </SecondBox>
        <ThirdBox>
          <Time>
            5:06 PM &#183; April 12, 2024 &#183; <Highlight>69</Highlight> Views
          </Time>
        </ThirdBox>
      </Wrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px dashed var(--color-border);
  grid-column: 1/5;
  grid-row: 1/5;
  padding: 28px;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/-1;
    grid-row: initial;
    padding: 24px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  gap: 16px;
  grid-template-rows: 1fr 2fr auto;
  grid-template-areas: "first" "second" "third";
`;

const FirstBox = styled.div`
  display: flex;
  grid-area: first;
  gap: 16px;
`;

const AvatarWrapper = styled.div`
  aspect-ratio: 1/1;
  border-radius: 50%;
  flex-shrink: 0;
  outline-offset: 4px;
  outline: 2px solid var(--color-primary);
  overflow: hidden;
  position: relative;
`;

const StyledImage = styled(Image)`
  inset: 0;
  position: absolute;
`;

const Information = styled.div`
  align-self: center;
`;

const NameWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 6px;
`;

const Name = styled.p`
  color: var(--color-primary-text);
  font-size: ${20 / 16}rem;
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
  }
`;

const Badge = styled(Image)`
  width: 16px;
  height: 16px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 14px;
    height: 14px;
  }
`;

const WorkStatus = styled.p`
  color: var(--color-secondary-text);
  font-size: ${16 / 16}rem;
  line-height: 1.25;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const SecondBox = styled.div`
  display: grid;
  grid-area: second;
`;

const Tweet = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: var(--color-primary-text);
  display: -webkit-box;
  font-size: ${18 / 16}rem;
  overflow: hidden;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

const ThirdBox = styled.div`
  align-items: end;
  grid-area: third;
`;

const Time = styled.p`
  color: var(--color-secondary-text);
  font-size: ${16 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const Highlight = styled.strong`
  color: var(--color-primary-text);
  font-weight: var(--font-weight-medium);
`;

export default FirstGrid;
