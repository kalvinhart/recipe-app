import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.backgrounds.header};
  margin-bottom: 60px;

  @media only screen and (min-width: var(--mq-small)) {
    height: 110px;
  }
`;

export const LogoWrapper = styled.div`
  width: 160px;
  display: flex;
  align-items: center;

  @media only screen and (min-width: var(--mq-small)) {
    width: 200px;
    margin-right: 60px;
  }
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 48px;

  @media only screen and (min-width: var(--mq-small)) {
    margin-right: 10px;
  }
`;

export const FavouritesWrapper = styled.div`
  width: 150px;
`;
