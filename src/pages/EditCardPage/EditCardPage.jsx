import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PopBrowse from "../../Components/popups/PopBrowse/PopBrowse";
import { getTask } from "../../api/api";

function EditCardPage() {
  const { id } = useParams();

  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTask = async () => {
      try {
        setIsLoading(true);

        const data = await getTask(id);

        setCard(data.task);
      } catch (error) {
        setError(error.message || "Не удалось загрузить задачу");
      } finally {
        setIsLoading(false);
      }
    };

    loadTask();
  }, [id]);

  if (isLoading) {
    return <p>Данные загружаются...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!card) {
    return null;
  }

  return <PopBrowse card={card} edit />;
}

export default EditCardPage;