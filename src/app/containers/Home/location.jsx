import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  APIProvider,
  Map,
  Marker,
  ColorScheme,
} from "@vis.gl/react-google-maps";

const SectionContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    w-full
    bg-gray-100
  `}
`;

const ContentWrapper = styled.div`
  ${tw`
    flex
    flex-col
    lg:flex-row
    items-start
    justify-between
    w-full
    px-6
    lg:px-20
    max-w-screen-xl
  `}
`;

const MapContainer = styled.div`
  ${tw`
    w-full
    lg:w-3/4
    h-[450px]
    rounded-lg
    overflow-hidden
  `}
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DescriptionContainer = styled.div`
  ${tw`
    w-full
    lg:w-2/3
    mt-8
    lg:mt-0
    lg:ml-16
    flex
    flex-col
    items-start
  `}
`;

const Header = styled.div`
  ${tw`
    w-full
    mb-1
    flex
    flex-row 
    items-center
    space-x-4
  `}
`;

const BlueLine = styled.div`
  ${tw`
    w-1/12
    h-[1px]
    bg-cBlue
    mb-2
  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    md:text-4xl
    font-bold
    text-black
  `}
`;

const AddressContainer = styled.div`
  ${tw`
    flex
    items-start
    mt-12
  `}
`;

const LocationIcon = styled(FontAwesomeIcon)`
  ${tw`
    text-cBlue
    text-2xl
    mr-4
  `}
`;

const AddressDetails = styled.div`
  ${tw`
    text-sm
    text-black
  `}
`;

const DetailTitle = styled.h3`
  ${tw`
    text-lg
    font-semibold
    mb-2
    text-black
  `}
`;

const blueTheme = [
  {
    elementType: "geometry",
    stylers: [{ color: "#e0f7fa" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#333333" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#e0f7fa" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#1194e4" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#b3e5fc" }],
  },
];

const Location = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
    colorScheme: ColorScheme.DARK,
  };

  const location = {
    lat: 51.262190267731846, // Latitude of the location
    lng: -113.99412257024366, // Longitude of the location
  };

  return (
    <SectionContainer>
      <ContentWrapper>
        <MapContainer>
          <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <Map
              style={mapStyles}
              defaultZoom={18}
              defaultCenter={location}
              options={{ styles: blueTheme }}
            >
              <Marker position={location} />
            </Map>
          </APIProvider>
        </MapContainer>

        {/* Right Side: Description */}
        <DescriptionContainer>
          <Header>
            <BlueLine />
            <h3 className="text-cBlue text-sm font-semibold uppercase tracking-widest mb-2">
              Location
            </h3>
          </Header>
          <Title>Auto Glass Repair, Tinting and PPF</Title>
          <AddressContainer>
            <LocationIcon icon={faLocationDot} />
            <AddressDetails>
              <DetailTitle>Service Point</DetailTitle>
              203 - 2914 Kingsview Boulevard SE
              <br />
              Airdrie, Alberta T4A 0E1, Canada
            </AddressDetails>
          </AddressContainer>
        </DescriptionContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default Location;
