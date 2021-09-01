import styled from "styled-components";

export const LogoText = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary ?? "black"};

  @media only screen and (min-width: ${(props) => props.theme.media.small}) {
    font-size: 20px;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary ?? "black"};
  margin-bottom: 30px;
`;

export const H2 = styled.h2`
  font-size: 20px;
  color: ${(props) => props.theme.font.fontColor ?? "black"};
  margin-bottom: 30px;
`;

export const H3 = styled.h3`
  font-size: 18px;
  color: ${(props) => props.theme.font.fontColor ?? "black"};
  margin-bottom: 30px;
`;

export const SpanBold = styled.span`
  font-weight: 600;
`;
