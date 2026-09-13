import Column from "../Column/Column";
import { MainWrapper, MainBlock, MainContent } from "./Main.styled";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-line skeleton-line-small"></div>
      <div className="skeleton-line skeleton-line-title"></div>
      <div className="skeleton-line skeleton-line-date"></div>
    </div>
  );
}

function SkeletonColumn({ cards }) {
  return (
    <div className="skeleton-column">
      <div className="skeleton-column-title"></div>

      {cards.map((card, index) => (
        <SkeletonCard key={card._id || index} />
      ))}
    </div>
  );
}

function Main({
  cards,
  isLoading,
  error,
  skeletonCards,
}) {
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
              statuses.map((status) => {
                const statusCards = skeletonCards.filter(
                  (card) => card.status === status
                );

                return (
                  <SkeletonColumn
                    key={status}
                    cards={statusCards}
                  />
                );
              })
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