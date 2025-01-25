import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";
import NavItems from "./navItems";

const NavBarContainer = styled.div`
  min-height: 68px;
  background-color: rgba(0, 0, 0, 0.75);
  ${tw`
    w-full
    flex
    flex-row
    md:flex-wrap
    items-center
    py-6
    px-4
    lg:px-12
    justify-between
  `}
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  box-sizing: border-box;
`;

const LogoContainer = styled.div``;

const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavBarContainer>
  );
};

export default NavBar;
