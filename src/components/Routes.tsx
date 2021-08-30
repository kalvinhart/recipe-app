import React from "react";
import { Switch, Route } from "react-router-dom";
import RandomRecipes from "./RandomRecipes";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/search/:searchTerm"></Route>
      <Route exact path="/recipe/:id"></Route>
      <Route exact path="/">
        <RandomRecipes />
      </Route>
    </Switch>
  );
};

export default Routes;
