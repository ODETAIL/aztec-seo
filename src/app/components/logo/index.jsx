import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const Image = styled.div`
  ${tw`
    h-10
    md:h-20
    ml-4
  `}
  img {
    width: auto;
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src="/images/logo_2.png" alt="Aztec Logo" />
      </Image>
    </LogoContainer>
  );
};

export default Logo;
