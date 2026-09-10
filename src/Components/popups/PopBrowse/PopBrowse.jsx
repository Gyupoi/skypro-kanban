import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { updateTask, deleteTask } from "../../../api/api";

function PopBrowse({ card, edit = false }) {
  const navigate = useNavigate();
  const { setCards } = useOutletContext();

  const [status, setStatus] = useState(card?.status || "Без статуса");
  const [description, setDescription] = useState(card?.description || "");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!card) {
    return null;
  }

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const handleSave = async () => {
    try {
      setIsLoading(true);
      setError("");

      const updatedTask = {
        title: card.title,
        topic: card.topic,
        status,
        description,
        date: card.date,
      };

      const data = await updateTask(card.id, updatedTask);

      setCards(data.tasks);

      navigate(`/card/${card.id}`);
    } catch (error) {
      setError(error.message || "Не удалось изменить задачу");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      setError("");

      await deleteTask(card.id);

      setCards((prevCards) =>
        prevCards.filter((item) => item.id !== card.id)
      );

      navigate("/");
    } catch (error) {
      setError(error.message || "Не удалось удалить задачу");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pop-browse _active" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>

              <div
                className={`categories__theme theme-top _${getTopicClass(
                  card.topic
                )} _active-category`}
              >
                <p>{card.topic}</p>
              </div>
            </div>

            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>

              <div className="status__themes">
                {statuses.map((item) =>
                  edit ? (
                    <button
                      key={item}
                      type="button"
                      className={`status__theme ${
                        status === item ? "_active" : ""
                      }`}
                      onClick={() => setStatus(item)}
                      disabled={isLoading}
                    >
                      <p>{item}</p>
                    </button>
                  ) : (
                    status === item && (
                      <div
                        key={item}
                        className="status__theme _active"
                      >
                        <p>{item}</p>
                      </div>
                    )
                  )
                )}
              </div>
            </div>

            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label
                    htmlFor="textArea01"
                    className="subttl"
                  >
                    Описание задачи
                  </label>

                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={!edit}
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(event) =>
                      setDescription(event.target.value)
                    }
                  />
                </div>
              </form>

              <Calendar />
            </div>

            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">
                Категория
              </p>

              <div
                className={`categories__theme _${getTopicClass(
                  card.topic
                )} _active-category`}
              >
                <p>{card.topic}</p>
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

            {!edit && (
              <div className="pop-browse__btn-browse">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={() =>
                      navigate(`/edit-card/${card.id}`)
                    }
                  >
                    Редактировать задачу
                  </button>

                  <button
                    type="button"
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={handleDelete}
                    disabled={isLoading}
                  >
                    {isLoading
                      ? "Удаление..."
                      : "Удалить задачу"}
                  </button>
                </div>

                <button
                  type="button"
                  className="btn-browse__close _btn-bg _hover01"
                  onClick={() => navigate("/")}
                  disabled={isLoading}
                >
                  Закрыть
                </button>
              </div>
            )}

            {edit && (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={handleSave}
                    disabled={isLoading}
                  >
                    {isLoading
                      ? "Сохранение..."
                      : "Сохранить"}
                  </button>

                  <button
                    type="button"
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={() =>
                      navigate(`/card/${card.id}`)
                    }
                    disabled={isLoading}
                  >
                    Отменить
                  </button>

                  <button
                    type="button"
                    className="btn-edit__delete _btn-bor _hover03"
                    onClick={handleDelete}
                    disabled={isLoading}
                  >
                    {isLoading
                      ? "Удаление..."
                      : "Удалить задачу"}
                  </button>
                </div>

                <button
                  type="button"
                  className="btn-edit__close _btn-bg _hover01"
                  onClick={() => navigate("/")}
                  disabled={isLoading}
                >
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getTopicClass(topic) {
  if (topic === "Web Design") return "orange";
  if (topic === "Research") return "green";
  if (topic === "Copywriting") return "purple";

  return "gray";
}

export default PopBrowse;