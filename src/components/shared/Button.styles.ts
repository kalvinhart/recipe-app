import styled from "styled-components";

interface ButtonProps {
  width?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width ?? "100%"};
  height: 34px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius ?? "none"};
  color: ${(props) => props.theme.font.buttonFontColor ?? "black"};
  box-shadow: ${(props) => props.theme.boxShadow ?? "none"};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
