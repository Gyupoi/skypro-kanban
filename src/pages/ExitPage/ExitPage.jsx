import { useNavigate } from "react-router-dom";

function ExitPage() {
  const navigate = useNavigate();

  const handleExit = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const handleStay = () => {
    window.location.hash = "";
  };

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>

          <form
            className="pop-exit__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="pop-exit__form-group">
              <button
                type="button"
                className="pop-exit__exit-yes _hover01"
                onClick={handleExit}
              >
                Да, выйти
              </button>

              <button
                type="button"
                className="pop-exit__exit-no _hover03"
                onClick={handleStay}
              >
                Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ExitPage;
