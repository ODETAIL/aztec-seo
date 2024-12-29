import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import { menuStyles } from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled.li`
  ${tw`
    text-sm
    md:text-base
    text-white
    font-bold
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-200
    ease-in-out
    hover:text-gray-500
  `}

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
    text-white
    text-xl
    mb-3
  `}
    `}
`;

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu="true">
            <a href="#">Home</a>
          </NavItem>
          <NavItem menu="true">
            <a href="#">Free Quote</a>
          </NavItem>
          <NavItem menu="true">
            <a href="#">Privacy Policy</a>
          </NavItem>
          <NavItem menu="true">
            <a href="#">Contact</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#">Free Quote</a>
      </NavItem>
      <NavItem>
        <a href="#">Privacy Policy</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact</a>
      </NavItem>
    </ListContainer>
  );
};

export default NavItems;
