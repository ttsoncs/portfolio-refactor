import { QUERIES } from "@/constants";
import Hamburger from "./Hamburger";
import React from "react";
import styled from "styled-components";

function Toggle({ handelClick, ...delegated }) {
  return (
    <Wrapper onClick={handelClick}>
      <Hamburger {...delegated} />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    background-color: initial;
    border: none;
    display: revert;
    padding: initial;
    z-index: 1;
  }
`;

export default Toggle;
