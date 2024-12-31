import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../components/assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0

  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 22em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 25em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 30em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-white
    text-2xl
    md:text-4xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-400
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>
          Feel The Best Experience With Our Auto Glass Replacement Services
        </Title>
        <InfoText>
          Since 2016, Aztec Autoglass has been dedicated to providing fast,
          reliable auto glass replacement services across Airdrie, Calgary, and
          surrounding areas. Our mobile car windshield replacement team brings
          expert care right to your door, ensuring a smooth, stress-free
          experience. With our trusted auto glass mobile service, we guarantee
          high-quality results and customer satisfaction wherever you are. Get
          in touch today for a free, no-obligation quote and let us handle your
          auto glass needs with ease and professionalism.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
