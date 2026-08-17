import { useEffect, useState } from "react";
import Column from "../Column/Column";
import { MainWrapper, MainBlock, MainContent } from "./Main.styled";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <MainWrapper>
      <div className="container">
        <MainBlock>
          <MainContent>
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
          </MainContent>
        </MainBlock>
      </div>
    </MainWrapper>
  );
}

export default Main;
