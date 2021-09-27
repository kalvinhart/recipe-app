import React, { useState, useEffect } from "react";
import { getRandomRecipe } from "../api";

import { Container, RecipeContainer } from "../styles/containerStyles";
import { H1, H3 } from "../styles/fontStyles";
import Recipe from "./shared/Recipe";

import Loading from "./shared/Loading";

interface RecipeState {
  recipes: any[];
}

const RandomRecipes: React.FC = () => {
  const [data, setData] = useState<RecipeState>({ recipes: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    } finally {
      setLoading(false);
    }
  }, []);

  if (error) {
    return <H3>An error has occurred. Please try again.</H3>;
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <H1>Random Recipes</H1>
          <RecipeContainer>
            {data.recipes.map((item) => (
              <Recipe key={item.id} expanded={false} {...item} />
            ))}
          </RecipeContainer>
        </>
      )}
    </Container>
  );
};

export default RandomRecipes;
