import React from "react";
import { Switch, Route } from "react-router-dom";
import RandomRecipes from "./RandomRecipes";
import RecipeDetail from "./RecipeDetail";
import SearchPage from "./SearchPage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/recipe/:id">
        <RecipeDetail />
      </Route>
      <Route exact path="/search/:term">
        <SearchPage />
      </Route>
      <Route exact path="/">
        <RandomRecipes />
      </Route>
    </Switch>
  );
};

export default Routes;
