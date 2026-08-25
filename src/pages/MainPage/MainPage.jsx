import { Outlet } from "react-router-dom";
import { useState } from "react";
import { cards as initialCards } from "../../../data";

import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import ExitPage from "../ExitPage/ExitPage";

function MainPage() {
  const [cards, setCards] = useState(initialCards);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <>
      <Header />
      <Main cards={cards} />

      <ExitPage />

      <Outlet context={{ addCard }} />
    </>
  );
}

export default MainPage;