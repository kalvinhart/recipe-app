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

import { Favourites, NutritionValues, RecipeProps } from "../../interfaces";
import { filterNutrients } from "../../utils/nutritionFilter";
import { FavouritesContext } from "../../store/FavouritesContext";

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
  const { favourites, updateFavourites, deleteFavourites } =
    useContext(FavouritesContext);
  const isWide = useMediaQuery(`(min-width: ${theme.media.med})`);
  const [instructions] = analyzedInstructions;

  const existsInFavourites = favourites.filter((item) => id === item.id).length > 0;

  let nutritionValues: NutritionValues | undefined;

  if (expanded && nutrition) {
    nutritionValues = filterNutrients(nutrition);
  }

  const handleSave = (data: Favourites): void => {
    updateFavourites(data);
  };

  const handleDelete = (id: number): void => {
    deleteFavourites(id);
  };

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
            text={existsInFavourites ? "Remove from Favourites" : "Save to Favourites"}
            width={isWide ? "300px" : "100%"}
            click={
              existsInFavourites
                ? () => handleDelete(id)
                : () => handleSave({ id: id, title: title, image: image })
            }
          />
        </>
      )}
    </RecipeWrapper>
  );
};

export default Recipe;
