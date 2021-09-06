import React from "react";
import { Switch, Route } from "react-router-dom";
import RandomRecipes from "./RandomRecipes";
import RecipeDetail from "./RecipeDetail";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/recipe/:id">
        <RecipeDetail />
      </Route>
      <Route exact path="/">
        <RandomRecipes />
      </Route>
    </Switch>
  );
};

export default Routes;
