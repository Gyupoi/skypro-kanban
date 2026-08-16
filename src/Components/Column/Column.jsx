import { cards } from "../../../data";
import Card from "../Card/Card";

function Column({ status }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{status}</p>
      </div>

      <div className="cards">
        {cards
          .filter((card) => card.status === status)
          .map((card) => (
            <Card key={card.id} card={card} />
          ))}
      </div>
    </div>
  );
}

export default Column;
