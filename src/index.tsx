import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyle from "./styles/globalStyles";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
