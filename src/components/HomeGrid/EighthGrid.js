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
  border: 1px dashed var(--color-border);
  grid-column: 9/13;
  grid-row: 4/7;

  @media ${QUERIES.phoneAndSmaller} {
    grid-column: 1/-1;
    grid-row: initial;
  }
`;

export default EighthGrid;
