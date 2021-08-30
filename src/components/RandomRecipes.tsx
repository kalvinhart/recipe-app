import React, { useState, useEffect } from "react";
import { getRandomRecipe } from "../api";

import { RecipeContainer } from "../styles/containerStyles";
import {
  InfoTextWrapper,
  InfoWrapper,
  LI,
  RecipeImage,
  RecipeWrapper,
  UL,
} from "../styles/recipeStyles";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { H1, H3 } from "../styles/fontStyles";

import { theme } from "../theme";

interface Recipe {
  recipes: any[];
}

const RandomRecipes: React.FC = () => {
  const [data, setData] = useState<Recipe>({ recipes: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getData = async (): Promise<any> => {
    const data = await getRandomRecipe();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    try {
      getData();
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, []);

  if (error) {
    return <H3>An error has occurred. Please try again.</H3>;
  }

  return (
    <RecipeContainer>
      {loading ? (
        <Loader type="ThreeDots" color={theme.colors.primary} />
      ) : (
        <>
          <H1>Random Recipes</H1>
          {data.recipes.map((item) => (
            <RecipeWrapper key={item.id}>
              <H3>{item.title}</H3>
              <InfoWrapper>
                <RecipeImage src={item.image} />
                <InfoTextWrapper>
                  <UL>
                    <LI>{item.servings} Servings</LI>
                    <LI>Ready in {item.readyInMinutes} Minutes</LI>
                    {item.vegan && <LI>Vegan</LI>}
                    {item.glutenFree && <LI>Gluten free</LI>}
                    {item.dairyFree && <LI>Dairy free</LI>}
                  </UL>
                </InfoTextWrapper>
              </InfoWrapper>
            </RecipeWrapper>
          ))}
        </>
      )}
    </RecipeContainer>
  );
};

export default RandomRecipes;
