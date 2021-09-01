import React, { useState, useEffect } from "react";
import { getRandomRecipe } from "../api";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container, RecipeContainer } from "../styles/containerStyles";
import { H1, H3 } from "../styles/fontStyles";
import Recipe from "./shared/Recipe";

import { theme } from "../theme";

interface RecipeState {
  recipes: any[];
}

const RandomRecipes: React.FC = () => {
  const [data, setData] = useState<RecipeState>({ recipes: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getData = async (): Promise<any> => {
    const data = await getRandomRecipe();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    try {
      // getData();
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, []);

  if (error) {
    return <H3>An error has occurred. Please try again.</H3>;
  }

  return (
    <Container>
      {loading ? (
        <Loader type="ThreeDots" color={theme.colors.primary} />
      ) : (
        <>
          <H1>Random Recipes</H1>
          <RecipeContainer>
            {data.recipes.map((item) => (
              <Recipe key={item.id} {...item} />
            ))}
          </RecipeContainer>
        </>
      )}
    </Container>
  );
};

export default RandomRecipes;
