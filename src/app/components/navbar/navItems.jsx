import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import { menuStyles } from "./menuStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ListContainer = styled.ul`
  z-index: 999;
  ${tw`
    flex
    list-none
  `}
`;

const NavItem = styled(({ menu, ...rest }) => <li {...rest} />)`
  ${tw`
    text-sm
    md:text-base
    text-white
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-200
    ease-in-out
    relative
  `}

  & > a:hover {
    ${tw`
      text-gray-500
    `}
  }

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

const IconWrapper = styled.span`
  ${tw`
    ml-2
    text-white
    text-xs
  `}
`;

const DropdownMenu = styled(({ isOpen, ...rest }) => <ul {...rest} />)`
  z-index: 1000;
  background-color: #1d2124;
  ${tw`
    absolute
    top-full
    right-0
    mt-2
    w-40
    list-none
    text-white
    rounded-md
    shadow-lg
    p-2
    opacity-0
    invisible
    transition-all
    duration-200
    border-b-2
    border-blue-500
  `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      ${tw`
        opacity-100
        visible
      `}
    `}
`;

const DropdownItem = styled.li`
  ${tw`
    text-sm
    font-medium
    p-2
    rounded-md
    hover:text-gray-500
  `}
`;

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu={true}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem menu={true}>
            <Link to="/quote">Free Quote</Link>
          </NavItem>
          <NavItem menu={true}>
            <Link to="/mobile-service">Mobile Service</Link>
          </NavItem>
          <NavItem menu={true}>
            <Link to="/windshield-replacement">Windshield Replacement</Link>
          </NavItem>
          <NavItem menu={true}>
            <Link to="/rock-chip-repair">Rock Chip Repair</Link>
          </NavItem>
          <NavItem menu={true}>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </NavItem>
          <NavItem menu={true}>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/quote">Free Quote</Link>
      </NavItem>
      <NavItem>
        <Link to="/mobile-service">Mobile Service</Link>
      </NavItem>
      <NavItem>
        <Link to="/windshield-replacement">Windshield Replacement</Link>
      </NavItem>
      <NavItem onClick={toggleDropdown}>
        More
        <IconWrapper>
          <FontAwesomeIcon icon={faChevronDown} />
        </IconWrapper>
        <DropdownMenu isOpen={isDropdownOpen} onMouseLeave={toggleDropdown}>
          <DropdownItem>
            <Link to="/rock-chip-repair">Rock Chip Repair</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/contact">Contact</Link>
          </DropdownItem>
        </DropdownMenu>
      </NavItem>
    </ListContainer>
  );
};

export default NavItems;
