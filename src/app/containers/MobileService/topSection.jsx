import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopSectionContainer = styled.div`
  /* min-height: 400px; */
  margin-top: 2em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    lg:pl-12
    lg:pr-12
    pl-3
    pr-3
  `}
`;

const HeaderSection = styled.div`
  ${tw`
    w-full
    h-[500px] 
    flex
    items-center
    justify-center
    text-white
  `}
  background: url("https://via.placeholder.com/1920x500") center/cover no-repeat;
  background-attachment: fixed;
`;

const HeaderText = styled.h1`
  ${tw`
    text-4xl
    font-bold
  `}
`;

const TopSection = () => {
  return (
    <TopSectionContainer>
      <HeaderSection>
        <HeaderText>Mobile Service</HeaderText>
      </HeaderSection>
    </TopSectionContainer>
  );
};

export default TopSection;
