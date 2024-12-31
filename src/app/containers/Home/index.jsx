import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavBar from "../../components/navbar";
import TopSection from "./topSection";
import BookingSteps from "./bookingSteps";
import { Marginer } from "../../components/marginer";
import { AboutUs } from "./aboutUs";
import { Footer } from "../../components/footer";

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
      <Marginer direction="vertical" margin="4em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="5em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
  );
};

export default Home;
