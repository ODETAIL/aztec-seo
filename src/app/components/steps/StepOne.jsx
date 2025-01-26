import React, { useState, useRef, useEffect, useMemo } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useBooking } from "../../hooks/useBooking";
import SUV from "../assets/images/cars/suv.png";
import Truck from "../assets/images/cars/truck.png";
import Sedan from "../assets/images/cars/sedan.png";
import Minivan from "../assets/images/cars/minivan.png";
import Convertible from "../assets/images/cars/convertible.png";
import Hatchback from "../assets/images/cars/hatchback.png";
import Coupe from "../assets/images/cars/coupe.png";

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    w-full
    py-8
  `}
`;

const CarTypesContainer = styled.div`
  ${tw`
    flex
    gap-4
    flex-wrap
    justify-center
    my-6
  `}
`;

const CarTypeButton = styled.button`
  ${tw`
    text-lg
    md:text-xl
    px-6
    py-2
    rounded-full
    transition-all
    duration-300
    font-semibold
  `}

  ${({ selected }) =>
    selected
      ? `
        background-color: rgba(0, 0, 0, 0.75); 
        color: #1194e4; 
      `
      : tw`bg-transparent text-white hover:text-gray-500`}
`;

const SwiperContainer = styled.div`
  ${tw`
    w-full
    max-w-6xl
    flex
    items-center
    justify-center
  `}

  .swiper-button-next,
  .swiper-button-prev {
    top: 10%;
    background-color: #1194e4;
    color: white;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.25rem;
  }
`;

const CarImage = styled.img`
  transform: scaleX(-1);
  ${tw`
    pt-6
    w-full
    max-w-xl
    md:max-w-4xl
    h-auto
    object-contain
  `}
`;

const InputContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    gap-4
    md:gap-12
    items-center
  `}
  margin-top: 1rem;
`;

const InputField = styled.input`
  ${tw`
    w-56
    md:w-64
    text-center
    text-white
    border-0
    focus:outline-none
    focus:ring-0
    bg-transparent
    text-lg
  `}
  border-bottom: 2px solid #1194e4;
  padding-bottom: 0.5rem;

  &::placeholder {
    ${tw`
      text-sm
      text-gray-400
    `}
  }
`;

const StepOne = () => {
  const { setBookingData } = useBooking();
  const [selectedType, setSelectedType] = useState(0);
  const [carDetails, setCarDetails] = useState(
    new Array(7).fill({ year: "", make: "", model: "" })
  );
  const swiperRef = useRef(null);

  const carTypes = useMemo(
    () => [
      { name: "Suv", image: SUV },
      { name: "Coupe", image: Coupe },
      { name: "Hatchback", image: Hatchback },
      { name: "Sedan", image: Sedan },
      { name: "Truck", image: Truck },
      { name: "Convertible", image: Convertible },
      { name: "Minivan", image: Minivan },
    ],
    []
  );

  const handleTypeClick = (index) => {
    setSelectedType(index);
    setBookingData((prev) => ({
      ...prev,
      carType: carTypes[index].name, // Update carType in context
    }));
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedDetails = [...carDetails];
    updatedDetails[index] = { ...updatedDetails[index], [field]: value };
    setCarDetails(updatedDetails);

    // Update year, make, and model in context for the selected car type
    if (index === selectedType) {
      setBookingData((prev) => ({
        ...prev,
        year: updatedDetails[index].year,
        make: updatedDetails[index].make,
        model: updatedDetails[index].model,
      }));
    }
  };

  // Initialize default car details when the component mounts
  useEffect(() => {
    setBookingData((prev) => ({
      ...prev,
      carType: carTypes[selectedType].name,
      year: carDetails[selectedType].year,
      make: carDetails[selectedType].make,
      model: carDetails[selectedType].model,
    }));
  }, [selectedType, carDetails, carTypes, setBookingData]);

  return (
    <StepContainer>
      <CarTypesContainer>
        {carTypes.map((car, index) => (
          <CarTypeButton
            key={index}
            selected={index === selectedType}
            onClick={() => handleTypeClick(index)}
          >
            {car.name}
          </CarTypeButton>
        ))}
      </CarTypesContainer>
      <SwiperContainer>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {carTypes.map((car, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CarImage src={car.image} alt={car.name} />
              <InputContainer>
                <InputField
                  type="text"
                  placeholder="Year"
                  value={carDetails[index].year}
                  onChange={(e) =>
                    handleInputChange(index, "year", e.target.value)
                  }
                />
                <InputField
                  type="text"
                  placeholder="Make"
                  value={carDetails[index].make}
                  onChange={(e) =>
                    handleInputChange(index, "make", e.target.value)
                  }
                />
                <InputField
                  type="text"
                  placeholder="Model"
                  value={carDetails[index].model}
                  onChange={(e) =>
                    handleInputChange(index, "model", e.target.value)
                  }
                />
              </InputContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </StepContainer>
  );
};

export default StepOne;
