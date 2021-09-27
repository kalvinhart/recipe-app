import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./shared/Loading";

const RandomRecipes = React.lazy(() => import("./RandomRecipes"));
const RecipeDetail = React.lazy(() => import("./RecipeDetail"));
const SearchPage = React.lazy(() => import("./SearchPage"));

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/recipe/:id">
        <Suspense fallback={<Loading />}>
          <RecipeDetail />
        </Suspense>
      </Route>
      <Route exact path="/search/:term">
        <Suspense fallback={<Loading />}>
          <SearchPage />
        </Suspense>
      </Route>
      <Route exact path="/">
        <Suspense fallback={<Loading />}>
          <RandomRecipes />
        </Suspense>
      </Route>
    </Switch>
  );
};

export default Routes;
