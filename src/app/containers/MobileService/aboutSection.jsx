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

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 20em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 22em;
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
  `};
`;

const Title = styled.h1`
  ${tw`
    text-white
    text-2xl
    md:text-3xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-xl
    text-sm
    md:text-base
    text-gray-400
    font-normal
    mt-4
  `};
`;

const AboutSection = () => {
  return (
    <AboutUsContainer>
      <InfoContainer>
        <Title>Mobile Windshield Replacement</Title>
        <InfoText>
          For your convenience, we offer mobile windshield replacement services
          that bring our expertise right to your doorstep. Whether you're at
          home, work, or any location that suits you, our team will come to you,
          making the process hassle-free. In just 60-90 minutes, we'll have your
          windshield expertly replaced, so you don't have to take time out of
          your busy day to visit our shop. Let us take care of everything while
          you carry on with your day.
        </InfoText>
      </InfoContainer>
      <CarContainer>
        <img src={JeepImg} alt="" />
      </CarContainer>
    </AboutUsContainer>
  );
};

export default AboutSection;
