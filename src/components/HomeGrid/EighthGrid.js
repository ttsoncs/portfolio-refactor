import { QUERIES } from "@/constants";
import React from "react";
import styled from "styled-components";

function EighthGrid() {
  return (
    <Wrapper>
      <audio controls>
        <source
          src="/sounds/music.mp3"
          type="audio/mpeg"
        />
      </audio>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-box-background);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  gap: 8px;
  grid-column: 9/13;
  grid-row: 4/6;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/-1;
    grid-row: initial;
  }
`;

export default EighthGrid;
