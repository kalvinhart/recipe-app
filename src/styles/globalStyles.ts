import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }


    html {
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        background-color: ${(props) => props.theme.backgrounds.body || "white"};
        font-family: ${(props) => props.theme.font.fontFamily || "sans-serif"};
        font-size: 14px;
        color: ${(props) => props.theme.font.fontColor || "darkgrey"};

        @media only screen and (min-width: ${(props) => props.theme.media.small}) {
        font-size: ${(props) => props.theme.font.fontSize || "16px"};
        }
    }

    input,
    input::-webkit-input-placeholder  {
        font: inherit;
        color: inherit;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.primary};
    }

    button {
        font: inherit;
    }
 `;

export default GlobalStyle;
