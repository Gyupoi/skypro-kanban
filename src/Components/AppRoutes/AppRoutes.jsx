import { Routes, Route } from "react-router-dom";

import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import NewCardPage from "../../pages/NewCardPage/NewCardPage";
import EditCardPage from "../../pages/EditCardPage/EditCardPage";
import ViewCardPage from "../../pages/ViewCardPage/ViewCardPage";
import ExitPage from "../../pages/ExitPage/ExitPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/add-card" element={<NewCardPage />} />
      <Route path="/edit-card/:id" element={<EditCardPage />} />
      <Route path="/card/:id" element={<ViewCardPage />} />
      <Route path="/exit" element={<ExitPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;