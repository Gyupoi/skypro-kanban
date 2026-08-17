import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, Cards } from "./Column.styled";

function Column({ status, cards }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{status}</p>
      </ColumnTitle>

      <Cards>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </Cards>
    </ColumnWrapper>
  );
}

export default Column;
