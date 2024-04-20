import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import cover from "/public/images/cover.webp";

function TenthGrid() {
  return (
    <Wrapper>
      <AvatarWrapper>
        <StyledImage
          src={cover}
          alt="Song cover"
        />
      </AvatarWrapper>
      <TextWrapper>
        <Title>Clarity in Kerosene</Title>
        <Artist>nothing,nowhere.</Artist>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px dashed var(--color-border);
  grid-column: 5/9;
  grid-row: 9/11;
  padding: 28px;
  display: flex;
  gap: 16px;
  height: 100%;
  width: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/-1;
    grid-row: initial;
    padding: 24px;
  }
`;

const AvatarWrapper = styled.div`
  aspect-ratio: 1/1;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
`;

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;

const Title = styled.p`
  color: var(--color-primary-text);
  font-size: ${20 / 16}rem;
  font-weight: var(--font-weight-medium);

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
  }
`;

const Artist = styled.p`
  color: var(--color-secondary-text);
  font-size: ${16 / 16}rem;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${16 / 16}rem;
  }
`;

export default TenthGrid;
