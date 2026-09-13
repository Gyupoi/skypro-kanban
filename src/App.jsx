import GlobalStyles from "./GlobalStyles";
import AppRoutes from "./Components/AppRoutes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <GlobalStyles />

        <div className="wrapper">
          <AppRoutes />
        </div>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;