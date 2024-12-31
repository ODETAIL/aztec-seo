import React from "react";
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
    bg-blue-500
    hover:bg-transparent
    hover:text-blue-500
    hover:border-blue-500
  `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-blue-500
    text-blue-500
    bg-transparent
    hover:bg-blue-500
    hover:text-white
    hover:border-transparent
  `}
`;

const Button = (props) => {
  const { theme, text } = props;

  if (theme === "outlined") return <FilledButton>{text}</FilledButton>;
  else return <OutlinedButton>{text}</OutlinedButton>;
};

export default Button;
