import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";

import { getTasks } from "../../api/api";

function MainPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setIsLoading(true);
        setError("");

        const data = await getTasks();

        setCards(data.tasks);
      } catch (error) {
        setError(error.message || "Не удалось загрузить задачи");
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const removeCard = (id) => {
    setCards((prevCards) =>
      prevCards.filter((card) => card.id !== id)
    );
  };

  const updateCard = (updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      )
    );
  };

  return (
    <>
      <Header />

      <Main
        cards={cards}
        isLoading={isLoading}
        error={error}
      />

      <Outlet
        context={{
          cards,
          setCards,
          addCard,
          removeCard,
          updateCard,
        }}
      />
    </>
  );
}

export default MainPage;