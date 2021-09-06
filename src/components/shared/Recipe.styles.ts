import styled from "styled-components";
import { H2 } from "../../styles/fontStyles";

interface ExpandedProps {
  expanded: boolean;
}

export const RecipeWrapper = styled.div<ExpandedProps>`
  width: 100%;
  min-height: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgrounds.recipe ?? "white"};
  border-radius: ${(props) => props.theme.borderRadius ?? "0"};
  box-shadow: ${(props) => props.theme.boxShadow ?? "none"};

  & ${H2} {
    text-align: center;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.med}) {
    ${(props) => props.expanded && "padding: 40px;"};
  }

  @media only screen and (min-width: ${(props) => props.theme.media.large}) {
    min-height: 350px;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.xl}) {
    min-height: 280px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: auto;
`;

export const InfoTextWrapper = styled.div`
  margin-bottom: 20px;
`;

export const RecipeImage = styled.img<ExpandedProps>`
  width: 150px;
  margin-right: 20px;
  margin-bottom: 20px;

  @media only screen and (min-width: ${(props) => props.theme.media.small}) {
    width: 250px;
    margin-right: 20px;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.med}) {
    width: ${(props) => (props.expanded ? "250px" : "150px")};
    margin-right: ${(props) => (props.expanded ? "60px" : "20px")};
  }

  @media only screen and (min-width: ${(props) => props.theme.media.large}) {
    width: ${(props) => (props.expanded ? "450px" : "250px")};
    margin-right: ${(props) => (props.expanded ? "60px" : "20px")};
  }

  @media only screen and (min-width: ${(props) => props.theme.media.xl}) {
    width: ${(props) => (props.expanded ? "500px" : "150px")};
    margin-right: ${(props) => (props.expanded ? "60px" : "20px")};
  }
`;

export const UL = styled.ul`
  list-style: none;
`;

export const LI = styled.li``;

export const NutritionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 40px;

  @media only screen and (min-width: ${(props) => props.theme.media.small}) {
    flex-direction: row;
    align-items: center;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.med}) {
    justify-content: space-around;
  }
`;

export const MacroWrapper = styled.div`
  width: 100%;
  display: flex;

  & p {
    margin-left: auto;
  }

  @media only screen and (min-width: ${(props) => props.theme.media.small}) {
    width: auto;
    flex-direction: column;

    & p {
      margin-left: 0;
    }
  }
`;

export const InstructionsWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const InstructionsList = styled.ul`
  margin-left: 10px;
`;

export const InstructionsStep = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
