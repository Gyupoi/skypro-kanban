import { useOutletContext } from "react-router-dom";
import PopNewCard from "../../Components/popups/PopNewCard/PopNewCard";

function NewCardPage() {
  const { addCard } = useOutletContext();

  return <PopNewCard onAddCard={addCard} />;
}

export default NewCardPage;