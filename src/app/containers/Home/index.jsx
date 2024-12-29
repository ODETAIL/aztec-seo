import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavBar from "../../components/navbar";
import TopSection from "./topSection";

const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  h-full
  items-center
  overflow-x-hidden
  `}
`;

const Home = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
    </PageContainer>
  );
};

export default Home;
