import { QUERIES } from "@/constants";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import verified from "/public/images/verified.svg";

function FirstGrid() {
  return (
    <Wrapper>
      <FirstBox>
        <AvatarWrapper>
          <StyledImage
            src="/images/avatar.webp"
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
          Welcome to my portfolio! Explore my work and discover the passion and
          creativity behind it. Feel free to reach out if you have any questions
          or opportunities to collaborate. Enjoy your visit!
        </Tweet>
      </SecondBox>
      <ThirdBox>
        <Time>
          5:06 PM &#183; April 12, 2024 &#183; <Highlight>69</Highlight> Views
        </Time>
      </ThirdBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  display: grid;
  gap: 12px;
  grid-column: 1/5;
  grid-row: 1/5;
  grid-template-rows: repeat(6, 1fr);
  padding: 28px;

  @media ${QUERIES.phoneAndSmaller} {
    aspect-ratio: 4 / 3;
    grid-column: 1/-1;
    grid-row: initial;
    padding: 24px;
  }
`;

const FirstBox = styled.div`
  display: flex;
  grid-row: 1/3;
  gap: 14px;
`;

const AvatarWrapper = styled.div`
  aspect-ratio: 1/1;
  border-radius: 50%;
  flex-shrink: 0;
  outline-offset: 4px;
  outline: 2px solid var(--color-primary);
  overflow: hidden;
  position: relative;
  transform: scale(0.85);
`;

const StyledImage = styled(Image)`
  inset: 0;
  position: absolute;
  transform: scale(1.5);
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
  align-items: start;
  display: grid;
  grid-row: 3/6;
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
  display: grid;
  grid-row: 6/-1;
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
