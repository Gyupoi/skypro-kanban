import GlobalStyles from "./GlobalStyles";
import AppRoutes from "./Components/AppRoutes/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyles />

      <div className="wrapper">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
