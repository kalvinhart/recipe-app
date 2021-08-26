import styled from "styled-components";

export const LogoText = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary ?? "black"};

  @media only screen and (min-width: var(--mq-small)) {
    font-size: 20px;
  }
`;
