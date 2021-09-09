import React, { useContext } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ThemeContext } from "styled-components";

import {
  InfoTextWrapper,
  InfoWrapper,
  LI,
  RecipeImage,
  RecipeWrapper,
  UL,
} from "./Recipe.styles";
import { H2, SpanBold } from "../../styles/fontStyles";
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
  const theme = useContext(ThemeContext);
  const isWide = useMediaQuery(`(min-width: ${theme.media.med})`);
  const [instructions] = analyzedInstructions;

  let nutritionValues: NutritionValues | undefined;

  if (expanded && nutrition) {
    nutritionValues = filterNutrients(nutrition);
  }

  const handleSave = (id: number): void => {};

  return (
    <RecipeWrapper key={id} expanded={expanded}>
      <H2>{title}</H2>
      <InfoWrapper>
        <RecipeImage src={image} expanded={expanded} />
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
          <Button
            text="Save to Favourites"
            width={isWide ? "200px" : "100%"}
            click={() => handleSave(id)}
          />
        </>
      )}
    </RecipeWrapper>
  );
};

export default Recipe;
