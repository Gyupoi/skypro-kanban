import { useEffect, useEffectEvent, useState } from "react";
import Column from "../Column/Column";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {isLoading ? (
              <p className="loading">Данные загружаются</p>
            ) : (
              <>
                <Column status="Без статуса" />
                <Column status="Нужно сделать" />
                <Column status="В работе" />
                <Column status="Тестирование" />
                <Column status="Готово" />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
