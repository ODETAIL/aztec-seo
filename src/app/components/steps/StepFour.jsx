import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useBooking } from "../../hooks/useBooking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCar,
  faNewspaper,
  faClock,
  faWrench,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  ${tw`
    grid
    grid-cols-1
    md:grid-cols-2
    gap-8
    w-full
    max-w-7xl
    mx-auto
    p-8
  `}
`;

const SummarySection = styled.div`
  ${tw`
    grid
    gap-8
    grid-cols-1
    md:grid-cols-2
    justify-items-center
  `}
`;

const SummaryItem = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    text-center
    bg-white
    rounded-lg
    p-8
    shadow-md
    w-full
    max-w-sm
    space-y-2
  `}
`;

const SummaryLabel = styled.div`
  ${tw`
    text-cBlue
    uppercase
    font-bold
    text-lg
    pb-4
  `}
`;

const SummaryValue = styled.div`
  ${tw`
    text-black
    font-extrabold
    text-3xl
    mt-1
  `}
`;

const FormSection = styled.div`
  ${tw`
    bg-black
    text-white
    rounded-lg
    p-10
    shadow-lg
    justify-items-center
  `}
`;

const FormTitle = styled.h2`
  ${tw`
    text-2xl
    font-bold
    text-cBlue
    mb-4
  `}
`;

const FormDescription = styled.p`
  ${tw`
    text-gray-200
    text-sm
    font-medium
    mb-8
  `}
`;

const Form = styled.form`
  ${tw`
    space-y-6
  `}
`;

const Input = styled.input`
  ${tw`
    w-full
    p-3
    rounded-lg
    text-black
    border
    border-gray-300
  `}
`;

const TextArea = styled.textarea`
  ${tw`
    w-full
    p-3
    rounded-lg
    text-black
    border
    border-gray-300
  `}
`;

const SubmitButton = styled.button`
  ${tw`
    w-full
    p-3
    uppercase
    bg-cBlue
    rounded-lg
    text-white
    font-bold
    text-lg
    transition-all
    hover:bg-gray-700
  `}
`;

const DetailIcon = styled(FontAwesomeIcon)`
  ${tw`
    text-cBlue
    font-bold
    text-3xl
  `}
`;

const StepFour = () => {
  const { bookingData } = useBooking();

  const totalDuration = bookingData.service
    .map((s) => parseInt(s.duration)) // Convert "90 min" to 90
    .filter((duration) => !isNaN(duration)) // Filter out invalid durations
    .reduce((total, current) => total + current, 0); // Sum up all durations
  return (
    <Container>
      {/* Summary Section */}
      <SummarySection>
        <SummaryItem>
          <DetailIcon icon={faCar} />
          <SummaryLabel>Car Type</SummaryLabel>
          <SummaryValue>{bookingData.carType || "-"}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <DetailIcon icon={faNewspaper} />
          <SummaryLabel>Year / Make / Model</SummaryLabel>
          <SummaryValue>
            {`${bookingData.year} ${bookingData.make} ${bookingData.model}` ||
              "-"}
          </SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <DetailIcon icon={faWrench} />
          <SummaryLabel>Service</SummaryLabel>

          {bookingData.service.map((s, idx) => (
            <SummaryValue key={idx}>{s.name}</SummaryValue>
          )) || "-"}
        </SummaryItem>
        <SummaryItem>
          <DetailIcon icon={faCalendarDays} />
          <SummaryLabel>Selected Date</SummaryLabel>
          <SummaryValue>{bookingData.selectedDate || "-"}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <DetailIcon icon={faClock} />
          <SummaryLabel>Selected Time</SummaryLabel>
          <SummaryValue>{bookingData.selectedTime || "-"}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <DetailIcon icon={faClockRotateLeft} />
          <SummaryLabel>Est. Duration</SummaryLabel>
          <SummaryValue>
            {totalDuration > 0 ? `${totalDuration} min` : "-"}
          </SummaryValue>
        </SummaryItem>
      </SummarySection>

      {/* Form Section */}
      <FormSection>
        <FormTitle>Your Contact Details</FormTitle>
        <FormDescription>
          The request will be sent to us and an associate will get in touch to
          confirm your booking.
        </FormDescription>
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input type="text" placeholder="First Name *" required />
            <Input type="text" placeholder="Last Name *" />
          </div>
          <Input type="email" placeholder="Email *" required />
          <Input type="tel" placeholder="Phone Number *" required />
          <TextArea rows="4" placeholder="Additional Information" />
          <SubmitButton type="submit">Get Quote</SubmitButton>
        </Form>
      </FormSection>
    </Container>
  );
};

export default StepFour;
