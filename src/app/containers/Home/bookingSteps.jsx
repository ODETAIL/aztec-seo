import {
  faCalendarAlt,
  faCarSide,
  faCommentDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-4xl
    text-white
    font-extrabold
  `}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    transition-colors
    hover:text-blue-500
    m-3
  `}
`;

const Step = styled.div`
  outline: 2px solid rgba(59, 130, 246, 0.2);
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6

  `}
`;

const StepTitle = styled.h4`
  ${tw`
    text-white
    text-lg
    font-semibold
    mt-4
  `}
`;

const StepDescription = styled.p`
  ${tw`
    text-xs
    md:text-sm
    text-center
    w-10/12
    text-gray-400
  `}
`;

const StepIcon = styled.span`
  ${tw`
    text-blue-500
    text-3xl
  `}
`;

const BookingSteps = () => {
  return (
    <Container>
      <Title>3 Easy Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Vehicle Info</StepTitle>
          <StepDescription>Fill in your vehicle information.</StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCommentDollar} />
            </StepIcon>
          </Step>
          <StepTitle>Receive Quote</StepTitle>
          <StepDescription>
            We will provide you a quote for the windshield replacement.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Book The Day</StepTitle>
          <StepDescription>
            Choose the best time to book an appointment.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};

export default BookingSteps;
