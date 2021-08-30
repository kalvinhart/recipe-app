import React from "react";
import Header from "./components/shared/Header";
import Main from "./components/shared/Main";
import Routes from "./components/Routes";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes />
      </Main>
    </>
  );
};

export default App;
