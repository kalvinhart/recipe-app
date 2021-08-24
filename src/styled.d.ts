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
    };
    border?: string;
    borderRadius?: string;
    boxShadow?: string;
  }
}
