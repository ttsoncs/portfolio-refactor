import { QUERIES } from "@/constants";
import emoji from "/public/images/emoji.svg";
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
            <Image
              src={emoji}
              fill={true}
              alt="Picture of Trinh The Son"
            />
          </AvatarWrapper>
          <ProfileWrapper>
            <Profile>
              <Name>Trinh The Son</Name>
              <Badge
                src={verified}
                alt="Verified badge"
              />
            </Profile>
            <Status>Available for work</Status>
          </ProfileWrapper>
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
  border: 1px solid var(--color-border);
  grid-column: 1 / 5;
  grid-row: 1 / 7;
  padding: 28px;
  display: grid;
  place-content: center;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1 / -1;
    grid-row: 1 / 7;
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
  gap: 18px;
  grid-area: first;
  height: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const AvatarWrapper = styled.div`
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  flex-shrink: 0;
  outline-offset: 2px;
  outline: 2px solid var(--color-primary);
  position: relative;
`;

const ProfileWrapper = styled.div`
  align-self: center;
`;

const Profile = styled.div`
  align-items: center;
  display: flex;
  gap: 6px;
`;

const Name = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: var(--color-primary-text);
  display: -webkit-box;
  font-size: ${20 / 16}rem;
  font-weight: var(--font-weight-medium);
  overflow: hidden;

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

const Status = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: var(--color-secondary-text);
  display: -webkit-box;
  font-size: ${16 / 16}rem;
  line-height: 1.25;
  overflow: hidden;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const SecondBox = styled.div`
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
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: var(--color-secondary-text);
  display: -webkit-box;
  font-size: ${16 / 16}rem;
  overflow: hidden;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const Highlight = styled.strong`
  color: var(--color-primary-text);
  font-weight: var(--font-weight-medium);
`;

export default FirstGrid;
