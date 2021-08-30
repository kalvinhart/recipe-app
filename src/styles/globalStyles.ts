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

    :root {
        --mq-small: 500px;
        --mq-med: 768px;
        --mq-large: 1024px;
    }

    body {
        min-height: 100vh;
        background-color: ${(props) => props.theme.backgrounds.body || "white"};
        font-family: ${(props) => props.theme.font.fontFamily || "sans-serif"};
        font-size: 14px;
        color: ${(props) => props.theme.font.fontColor || "darkgrey"};

        @media only screen and (min-width: var(--mq-small)) {
        font-size: ${(props) => props.theme.font.fontSize || "16px"};
        }
    }

    input,
    input::-webkit-input-placeholder  {
        font: inherit;
        color: inherit;
    }
 `;

export default GlobalStyle;
