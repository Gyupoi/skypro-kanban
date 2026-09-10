import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../context/TaskContext";

function PopNewCard() {
  const navigate = useNavigate();
  const { addCard } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setError("Введите название задачи");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const newTask = {
        title: title.trim(),
        topic: "Web Design",
        status: "Без статуса",
        description: description.trim(),
        date: new Date().toISOString(),
      };

      await addCard(newTask);

      navigate("/");
    } catch (error) {
      setError(error.message || "Не удалось создать задачу");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pop-new-card pop-new-card-page">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>

            <Link to="/" className="pop-new-card__close">
              &#10006;
            </Link>

            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                onSubmit={handleCreate}
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>

                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                      setError("");
                    }}
                  />
                </div>

                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>

                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>
              </form>

              <Calendar />
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>

              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>

                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>

                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>

            {error && (
              <p
                style={{
                  color: "red",
                  marginBottom: "10px",
                }}
              >
                {error}
              </p>
            )}

            <button
              className="form-new__create _hover01"
              id="btnCreate"
              type="submit"
              form="formNewCard"
              disabled={isLoading}
            >
              {isLoading ? "Создание..." : "Создать задачу"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
