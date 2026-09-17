import { Outlet } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import { useTasks } from "../../context/TaskContext";

function MainPage() {
  const {
    cards,
    isLoading,
    error,
    skeletonCards,
  } = useTasks();

  return (
    <>
      <Header />

      <Main
        cards={cards}
        isLoading={isLoading}
        error={error}
        skeletonCards={skeletonCards}
      />

      <Outlet />
    </>
  );
}

export default MainPage;