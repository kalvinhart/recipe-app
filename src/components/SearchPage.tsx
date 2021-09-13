import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { searchForRecipe } from "../api";
import { RecipeContainer } from "../styles/containerStyles";
import { H1, H3 } from "../styles/fontStyles";
import Recipe from "./shared/Recipe";

interface Params {
  term: string;
}

interface ResultsState {
  number: number;
  offset: number;
  results: any[];
  totalResults: number;
}

const SearchPage = () => {
  const { term } = useParams<Params>();
  const history = useHistory();
  let results;

  const initialState: ResultsState = {
    number: 0,
    offset: 0,
    results: [],
    totalResults: 0,
  };

  const [data, setData] = useState<ResultsState>(initialState);

  useEffect(() => {
    if (term === "") history.push("/");

    const performSearch = async () => {
      const response = await searchForRecipe(term);
      console.log(response);
      setData(response);
    };

    performSearch();
  }, [term, history]);

  if (data.totalResults > 0) {
    results = data.results.map((item) => (
      <Recipe key={item.id} expanded={false} {...item} />
    ));
  } else {
    results = <H3>No results found, please try again.</H3>;
  }

  return (
    <>
      <H1>Search Results</H1>
      <RecipeContainer>{results}</RecipeContainer>
    </>
  );
};

export default SearchPage;
