import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  width: string;
  text: string;
  click: () => void;
}

const Button: React.FC<ButtonProps> = ({ width, text, click }: ButtonProps) => {
  return (
    <StyledButton width={width} onClick={click}>
      {text}
    </StyledButton>
  );
};

export default Button;
