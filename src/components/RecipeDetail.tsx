import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeInfo } from "../api";
import { H3 } from "../styles/fontStyles";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { theme } from "../theme";
import Recipe from "./shared/Recipe";
import { RecipeProps } from "../interfaces";

interface Params {
  id: string;
}

const RecipeDetail: React.FC = () => {
  const initialState = {
    analyzedInstructions: [],
    dairyFree: false,
    expanded: true,
    glutenFree: false,
    id: 0,
    image: "",
    readyInMinutes: 0,
    servings: 0,
    title: "",
    vegan: false,
  };

  const { id } = useParams<Params>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<RecipeProps>(initialState);

  useEffect(() => {
    const getData = async (id: string) => {
      setLoading(true);
      try {
        const response = await getRecipeInfo(id);
        setData({ ...response, expanded: true });
        console.log(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    if (data.id === 0) {
      getData(id);
    }
  }, [data, id]);

  if (error) {
    return <H3>An error has occurred. Please try again.</H3>;
  }

  return (
    <>
      {loading ? (
        <Loader type="ThreeDots" color={theme.colors.primary} />
      ) : (
        <Recipe {...data} />
      )}
    </>
  );
};

export default RecipeDetail;
