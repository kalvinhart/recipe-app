import React from "react";
import Header from "./components/shared/Header";
import Main from "./components/shared/Main";

const App: React.FC = () => {
  return (
    <>
      <Header>
        <Main></Main>
      </Header>
    </>
  );
};

export default App;
