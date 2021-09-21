import React from "react";
import Header from "./components/shared/Header";
import Main from "./components/shared/Main";
import Routes from "./components/Routes";

import { FavouritesProvider } from "./store/FavouritesContext";

const App: React.FC = () => {
  return (
    <>
      <FavouritesProvider>
        <Header />
        <Main>
          <Routes />
        </Main>
      </FavouritesProvider>
    </>
  );
};

export default App;
