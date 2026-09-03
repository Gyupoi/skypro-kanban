import { useNavigate } from "react-router-dom";

function ExitPage() {
  const navigate = useNavigate();

const handleExit = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isAuthenticated");
  navigate("/login");
};

  const handleStay = () => {
    navigate("/");
  };

  return (
    <div className="pop-exit _active">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>

          <div className="pop-exit__form-group">
            <button
              type="button"
              className="pop-exit__exit-yes"
              onClick={handleExit}
            >
              Да, выйти
            </button>

            <button
              type="button"
              className="pop-exit__exit-no"
              onClick={handleStay}
            >
              Нет, остаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExitPage;