import { useEffect, useState } from "react";
import { cards } from "../../../data";
import Column from "../Column/Column";
import { MainWrapper, MainBlock, MainContent } from "./Main.styled";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <MainWrapper>
      <div className="container">
        <MainBlock>
          <MainContent>
            {isLoading ? (
              <p className="loading">Данные загружаются</p>
            ) : (
              statuses.map((status) => {
                const statusCards = cards.filter(
                  (card) => card.status === status
                );

                return (
                  <Column
                    key={status}
                    status={status}
                    cards={statusCards}
                  />
                );
              })
            )}
          </MainContent>
        </MainBlock>
      </div>
    </MainWrapper>
  );
}

export default Main;