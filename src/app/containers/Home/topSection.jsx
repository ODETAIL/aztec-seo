import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import PorcheImg from "../../components/assets/images/porche.png";
import BlobImg from "../../components/assets/images/blob.svg";
import { SCREENS } from "../../components/responsive";
import Button from "../../components/button";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
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

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `}
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-white
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `}
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-400
  `}
`;

const BlobContainer = styled.div`
  width: 25em;
  height: 5em;
  position: absolute;
  right: -5em;
  top: -10em;
  z-index: 1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 7em;
  right: -4em;
  top: -3em;
  position: absolute;
  z-index: 1;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 8em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 15em;
    right: -9em;
    top: -4em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 19em;
    right: -5em;
    top: -4em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    mt-4
    flex-wrap
  `}
`;

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Same-Day Autoglass Replacements</Slogan>
        <Description>
          Get in touch today for a free, no-obligation quote and let us handle
          your auto glass needs with ease and professionalism.
        </Description>
        <ButtonsContainer>
          <Button theme="filled" text="Get Free Quote" />
          <Button theme="outlined" text="Call Us Now" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="" />
        </BlobContainer>
        <StandaloneCar>
          <img src={PorcheImg} alt="" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
