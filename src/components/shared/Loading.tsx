import React from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { theme } from "../../theme";

import { LoadingWrapper } from "./Loading.styles";

const Loading: React.FC = () => {
  return (
    <LoadingWrapper>
      <Loader type="ThreeDots" color={theme.colors.primary} />
    </LoadingWrapper>
  );
};

export default Loading;
