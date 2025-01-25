import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { format, addDays, startOfWeek, isBefore, startOfDay } from "date-fns";

const CalendarContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    w-full
    md:max-w-7xl
    py-8
    px-6
  `}
`;

const Header = styled.div`
  ${tw`
    w-full
    flex
    justify-between
    items-center
    px-6
    py-6
    bg-cBlue
    text-white
    rounded-t-lg
  `}
`;

const Title = styled.h2`
  ${tw`
    text-xl
    md:text-2xl
    font-extrabold
  `}
`;

const WeekRow = styled.div`
  ${tw`
    w-full
    grid
    p-4
    text-center
    font-medium
    rounded-b-lg
    border-b-4
    bg-gray-200
    border-cBlue
    gap-4
  `}
  grid-template-columns: repeat(${({ daysToShow }) => daysToShow}, 1fr);
`;

const DayContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    py-4
    px-2
    rounded-md
  `}
`;

const DateText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-extrabold
    text-black
  `}
`;

const WeekText = styled.div`
  ${tw`
    text-sm
    md:text-lg
    font-bold
    text-black
  `}
`;

const TimeSlot = styled.button`
  ${tw`
    text-sm
    text-black
    w-full
    py-2
    px-2
    md:px-4
    mt-1
    rounded-full
    hover:text-white
    transition-all
    duration-200
  `}
  background-color: ${({ isSelected }) => (isSelected ? "#39b972" : "#f1f1f1")};
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#000000")};
`;

const FooterText = styled.div`
  ${tw`
    text-center
    text-sm
    text-gray-300
    mt-4
  `}
`;

const DateContainer = styled.div`
  ${tw`
    mb-4
  `}
  border-bottom: ${({ isToday }) => (isToday ? "2px solid #1194e4" : "none")};
`;

const StepThree = () => {
  const today = startOfDay(new Date()); // Current day at 00:00
  const [currentWeek, setCurrentWeek] = useState(
    startOfWeek(today, { weekStartsOn: 0 })
  );
  const [selectedTime, setSelectedTime] = useState({});
  const [daysToShow, setDaysToShow] = useState(7); // Default to showing 7 days

  useEffect(() => {
    // Adjust daysToShow based on screen size
    const updateDaysToShow = () => {
      if (window.innerWidth <= 768) {
        setDaysToShow(3); // Show 3 days on mobile
      } else {
        setDaysToShow(7); // Show 7 days on larger screens
      }
    };

    updateDaysToShow();
    window.addEventListener("resize", updateDaysToShow);

    return () => window.removeEventListener("resize", updateDaysToShow);
  }, []);

  // Generate dates for the week dynamically
  const daysOfWeek = Array.from({ length: daysToShow }).map((_, i) =>
    addDays(currentWeek, i)
  );

  // Generate time slots dynamically (1-hour intervals, 12-hour format)
  const timeSlots = Array.from({ length: 8 }, (_, i) => {
    const hour24 = 9 + i;
    const hour12 = hour24 > 12 ? hour24 - 12 : hour24;
    const period = hour24 >= 12 ? "PM" : "AM";
    return `${hour12}:00 ${period}`;
  });

  // Handle selecting a time slot
  const handleTimeClick = (date, time) => {
    setSelectedTime((prev) => ({
      ...prev,
      [date]: prev[date] === time ? null : time,
    }));
  };

  // Navigate to the next set of visible days
  const goToNextWeek = () => {
    setCurrentWeek(addDays(currentWeek, daysToShow)); // Move forward by the number of visible days
  };

  // Navigate to the previous set of visible days
  const goToPreviousWeek = () => {
    const previousWeekStart = addDays(currentWeek, -daysToShow); // Move backward by the number of visible days
    if (!isBefore(previousWeekStart, today)) {
      setCurrentWeek(previousWeekStart);
    } else {
      setCurrentWeek(startOfWeek(today, { weekStartsOn: 0 })); // Reset to current week
    }
  };

  return (
    <CalendarContainer>
      <Header>
        <button onClick={goToPreviousWeek}>&lt;</button>
        <Title>{format(currentWeek, "MMMM yyyy")}</Title>
        <button onClick={goToNextWeek}>&gt;</button>
      </Header>

      <WeekRow daysToShow={daysToShow}>
        {daysOfWeek.map((date) => (
          <DayContainer key={format(date, "yyyy-MM-dd")}>
            <DateContainer
              isToday={
                format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd")
              }
            >
              <DateText>{format(date, "dd")}</DateText>
              <WeekText>{format(date, "EEEE")}</WeekText>
            </DateContainer>

            <div className="grid grid-cols-1 gap-2 mt-2">
              {timeSlots.map((time) => (
                <TimeSlot
                  key={`${format(date, "yyyy-MM-dd")}-${time}`}
                  onClick={() =>
                    handleTimeClick(format(date, "yyyy-MM-dd"), time)
                  }
                  isSelected={selectedTime[format(date, "yyyy-MM-dd")] === time}
                >
                  {time}
                </TimeSlot>
              ))}
            </div>
          </DayContainer>
        ))}
      </WeekRow>

      <FooterText>
        * Reservation times are approximate and may vary within 60 minutes.
      </FooterText>
    </CalendarContainer>
  );
};

export default StepThree;
