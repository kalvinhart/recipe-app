import React from "react";

import {
  InfoTextWrapper,
  InfoWrapper,
  LI,
  RecipeImage,
  RecipeWrapper,
  UL,
} from "./Recipe.styles";
import { H3, SpanBold } from "../../styles/fontStyles";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

interface RecipeProps {
  dairyFree: boolean;
  glutenFree: boolean;
  id: number;
  image: string;
  readyInMinutes: number;
  servings: number;
  title: string;
  vegan: boolean;
}

const Recipe: React.FC<RecipeProps> = ({
  dairyFree,
  glutenFree,
  id,
  image,
  readyInMinutes,
  servings,
  title,
  vegan,
}) => {
  return (
    <RecipeWrapper key={id}>
      <H3>{title}</H3>
      <InfoWrapper>
        <RecipeImage src={image} />
        <InfoTextWrapper>
          <UL>
            <LI>{servings} Servings</LI>
            <LI>Ready in {readyInMinutes} Minutes</LI>
            {vegan && <LI>Vegan</LI>}
            {glutenFree && (
              <LI>
                <SpanBold>Gluten</SpanBold> free
              </LI>
            )}
            {dairyFree && (
              <LI>
                <SpanBold>Dairy</SpanBold> free
              </LI>
            )}
          </UL>
        </InfoTextWrapper>
      </InfoWrapper>
      <Link to={`/recipe/${id}`}>
        <Button text="Find out more..." width="200px" click={() => null}></Button>
      </Link>
    </RecipeWrapper>
  );
};

export default Recipe;
