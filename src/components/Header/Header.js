"use client";

import { QUERIES } from "@/constants";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import useResizeToggle from "@/hooks/useResizeToggle";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handelClick() {
    setIsOpen(!isOpen);
  }

  // useResizeToggle(setIsOpen, 550);

  return (
    <MaxWidthWrapper>
      <Wrapper>
        <Logo setIsOpen={setIsOpen} />
        <Toggle
          handelClick={handelClick}
          isOpen={isOpen}
          size={36}
        />
        <DesktopNav handelClick={handelClick} />
        <MobileNav
          isOpen={isOpen}
          handelClick={handelClick}
        />
      </Wrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.header`
  align-items: center;
  background-color: var(--color-background);
  display: flex;
  height: 64px;
  justify-content: space-between;
  position: sticky;
  z-index: 1;
  top: 0px;
  width: 100%;
`;

const Wrapper = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
  }
`;

export default Header;