import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

export const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    justify-center
  `};
`;

export const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

export const CopyrightText = styled.small`
  font-size: 10px;
  padding-top: 20px;
  ${tw`
    text-gray-400
  `}
`;

// const AboutContainer = styled.div`
//   ${tw`
//     flex
//     flex-col
//     mr-2
//     md:mr-16
//     pl-10
//     pr-10
//     md:pl-3
//     md:pr-3
//   `};
// `;

// const AboutText = styled.p`
//   ${tw`
//     text-white
//     text-sm
//     font-normal
//     max-w-xs
//     leading-5
//     mt-2
//   `};
// `;

export const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

export const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

export const ListItem = styled.li`
  ${tw`
    mb-3
  `};

  & > a {
    ${tw`
      text-sm
    text-white
      transition-all
      hover:text-gray-200
    `};
  }
`;

export const HoursGrid = styled.div`
  ${tw`
    grid
    gap-2
    mt-2
  `};
  grid-template-columns: auto auto; /* Two columns: one for days, one for hours */
`;

export const DayColumn = styled.span`
  ${tw`
    text-white
    text-sm
    font-normal
  `};
`;

export const TimeColumn = styled.span`
  ${tw`
    text-white
    text-sm
    font-normal
  `};

  &.closed {
    ${tw`
      font-bold
      text-gray-400
    `};
  }
`;

export const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

export const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

export const BlueIcon = styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    bg-blue-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
    mb-3
  `};
`;

export const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;

export const LocationContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    mt-5
  `};
`;

export const AddressLine = styled.p`
  ${tw`
    text-gray-500
    text-sm
    font-normal
    mb-0
  `};
`;
