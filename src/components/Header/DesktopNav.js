import { QUERIES } from "@/constants";
import DesktopLinks from "./DesktopLinks";
import React from "react";
import styled from "styled-components";

function DesktopNav({ handelClick }) {
  return (
    <Wrapper>
      <DesktopLinks handelClick={handelClick}></DesktopLinks>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  gap: 36px;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export default DesktopNav;
