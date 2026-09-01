import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Calendar from "../../Calendar/Calendar";

function PopBrowse({ card, edit = false }) {
  const navigate = useNavigate();

  const [status, setStatus] = useState(card?.status || "Без статуса");

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

  return (
    <div className="pop-browse _active" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">

            {/* Заголовок */}
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">
                {card.title}
              </h3>

              <div
                className={`categories__theme theme-top _${getTopicClass(
                  card.topic
                )} _active-category`}
              >
                <p>{card.topic}</p>
              </div>
            </div>

            {/* Статус */}
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

            {/* Описание + календарь */}
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
                  />
                </div>
              </form>

              <Calendar />

            </div>

            {/* Категория на мобильной версии */}
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

            {/* Просмотр */}
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
                  >
                    Удалить задачу
                  </button>

                </div>

                <button
                  type="button"
                  className="btn-browse__close _btn-bg _hover01"
                  onClick={() => navigate("/")}
                >
                  Закрыть
                </button>
              </div>
            )}

            {/* Редактирование */}
            {edit && (
              <div className="pop-browse__btn-edit">
                <div className="btn-group">

                  <button
                    type="button"
                    className="btn-edit__edit _btn-bg _hover01"
                  >
                    Сохранить
                  </button>

                  <button
                    type="button"
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={() =>
                      navigate(`/card/${card.id}`)
                    }
                  >
                    Отменить
                  </button>

                  <button
                    type="button"
                    className="btn-edit__delete _btn-bor _hover03"
                  >
                    Удалить задачу
                  </button>

                </div>

                <button
                  type="button"
                  className="btn-edit__close _btn-bg _hover01"
                  onClick={() => navigate("/")}
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