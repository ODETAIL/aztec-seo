import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavBar from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";

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

const Quote = () => {
  return (
    <PageContainer>
      <NavBar />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
  );
};

export default Quote;
