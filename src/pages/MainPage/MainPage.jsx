import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import PopBrowse from "../../Components/popups/PopBrowse/PopBrowse";
import PopNewCard from "../../Components/popups/PopNewCard/PopNewCard";

function MainPage() {
  return (
    <>
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </>
  );
}

export default MainPage;