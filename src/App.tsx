import React, { useEffect, useState } from "react";
import Header from "./components/shared/Header";
import Main from "./components/shared/Main";
import Routes from "./components/Routes";

const App: React.FC = () => {
  const [favourites, setFavourties] = useState([]);

  useEffect(() => {
    if (favourites.length === 0) {
      if (localStorage.getItem("favourites")) {
        const favouritesData = JSON.parse(localStorage.getItem("favourites") || "[]");
        setFavourties(favouritesData);
      }
    }
  }, [favourites]);

  return (
    <>
      <Header favourites={favourites} />
      <Main>
        <Routes />
      </Main>
    </>
  );
};

export default App;
