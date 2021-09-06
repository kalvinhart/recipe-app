import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary?: string;
      secondary?: string;
    };
    backgrounds: {
      body?: string;
      header?: string;
      recipe?: string;
    };
    font: {
      fontFamily?: string;
      fontSize?: string;
      fontColor?: string;
      buttonFontColor?: string;
    };
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
    media: {
      xs: string;
      small: string;
      med: string;
      large: string;
      xl?: string;
    };
  }
}
