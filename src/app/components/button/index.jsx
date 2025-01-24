import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-cBlue
    hover:bg-transparent
    hover:text-cBlue
    hover:border-cBlue
  `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-cBlue
    text-cBlue
    bg-transparent
    hover:bg-cBlue
    hover:text-white
    hover:border-transparent
  `}
`;

const Button = (props) => {
  const { theme, text } = props;
  const navigate = useNavigate();

  if (theme === "outlined") return <FilledButton>{text}</FilledButton>;
  else
    return (
      <OutlinedButton onClick={() => navigate("/quote")}>{text}</OutlinedButton>
    );
};

export default Button;
