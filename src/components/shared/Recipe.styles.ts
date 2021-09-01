import styled from "styled-components";

export const RecipeWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgrounds.recipe ?? "white"};
  border-radius: ${(props) => props.theme.borderRadius ?? "0"};
  box-shadow: ${(props) => props.theme.boxShadow ?? "none"};
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const InfoTextWrapper = styled.div``;

export const RecipeImage = styled.img`
  width: 150px;
  margin-right: 20px;

  @media only screen and (min-width: ${(props) => props.theme.media.small}) {
    width: 250px;
    margin-right: 20px;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.med}) {
    width: 150px;
    margin-right: 20px;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.large}) {
    width: 250px;
    margin-right: 20px;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.xl}) {
    width: 150px;
    margin-right: 20px;
  }
`;

export const UL = styled.ul`
  list-style: none;
`;

export const LI = styled.li``;