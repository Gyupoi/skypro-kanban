import { cards } from "../../../data";
import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, Cards } from "./Column.styled";

function Column({ status }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>Без статуса</p>
      </ColumnTitle>

      <Cards>
        {cards
          .filter((card) => card.status === status)
          .map((card) => (
            <Card key={card.id} card={card} />
          ))}
      </Cards>
    </ColumnWrapper>
  );
}

export default Column;
