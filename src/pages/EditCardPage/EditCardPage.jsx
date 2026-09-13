import { useTasks } from "../../context/TaskContext";
import { useParams } from "react-router-dom";
import PopBrowse from "../../Components/popups/PopBrowse/PopBrowse";

function EditCardPage() {
  const { id } = useParams();
  const { cards, isLoading, error } = useTasks();

  if (isLoading) {
    return <p>Данные загружаются...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const card = cards.find((item) => item.id === id);

  if (!card) {
    return <p>Задача не найдена</p>;
  }

  return <PopBrowse card={card} edit />;
}

export default EditCardPage;
