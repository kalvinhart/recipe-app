import React from "react";
import { StyledMain } from "./Main.styles";

const Main: React.FC = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
