import Column from "../Column/Column";
import { MainWrapper, MainBlock, MainContent } from "./Main.styled";

function Main({ cards, isLoading, error }) {
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
            ) : error ? (
              <p className="loading">{error}</p>
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