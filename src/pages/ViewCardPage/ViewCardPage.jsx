import { useParams } from "react-router-dom";
import { cards } from "../../../data";
import PopBrowse from "../../Components/popups/PopBrowse/PopBrowse";

function ViewCardPage() {
  const { id } = useParams();

  const card = cards.find(
    (item) => item.id === Number(id)
  );

  if (!card) {
    return null;
  }

  return <PopBrowse card={card} />;
}

export default ViewCardPage;