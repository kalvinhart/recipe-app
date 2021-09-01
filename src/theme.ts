import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#02b35a",
    secondary: "#00843c",
  },
  font: {
    fontFamily: "Open Sans, sans-serif",
    fontColor: "#696d75",
    fontSize: "16px",
    buttonFontColor: "#ffffff",
  },
  backgrounds: {
    header: "#f5f7fa",
    body: "white",
    recipe: "#f5f7fa",
  },
  border: "none",
  borderRadius: "10px",
  boxShadow: "2px 2px 4px 1px rgba(0, 0, 0, 0.1)",
  media: {
    small: "500px",
    med: "768px",
    large: "1200px",
  },
};
