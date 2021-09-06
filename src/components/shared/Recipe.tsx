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
import RecipeNutrition from "../RecipeNutrition";
import RecipeInstructions from "../RecipeInstructions";

import { NutritionValues, RecipeProps } from "../../interfaces";
import { filterNutrients } from "../../utils/nutritionFilter";

const Recipe: React.FC<RecipeProps> = ({
  analyzedInstructions,
  dairyFree,
  expanded,
  glutenFree,
  id,
  image,
  nutrition,
  readyInMinutes,
  servings,
  title,
  vegan,
}) => {
  console.log(analyzedInstructions);
  const [instructions] = analyzedInstructions;
  console.log("From Recipe: ", instructions.steps);

  let nutritionValues: NutritionValues | undefined;

  if (expanded && nutrition) {
    nutritionValues = filterNutrients(nutrition);
  }

  return (
    <RecipeWrapper key={id}>
      <H3>{title}</H3>
      <InfoWrapper>
        <RecipeImage src={image} />
        <InfoTextWrapper>
          <UL>
            <LI>{servings} Servings</LI>
            <LI>
              Ready in <SpanBold>{readyInMinutes}</SpanBold> Minutes
            </LI>
            {vegan && (
              <LI>
                <SpanBold>Vegan</SpanBold>
              </LI>
            )}
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
      {!expanded && (
        <Link to={`/recipe/${id}`}>
          <Button text="Find out more..." width="200px" click={() => null}></Button>
        </Link>
      )}
      {expanded && (
        <>
          <RecipeNutrition {...nutritionValues} />
          <RecipeInstructions instructions={instructions.steps} />
        </>
      )}
    </RecipeWrapper>
  );
};

export default Recipe;
