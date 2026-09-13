import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import {
  PopUserWrapper,
  UserName,
  UserMail,
  UserTheme,
  ExitButton,
} from "./PopUser.styled";

function PopUser() {
  const { user } = useAuth();

  return (
    <PopUserWrapper>
      <UserName>{user?.name || "Пользователь"}</UserName>

      <UserMail>{user?.login || "Почта не указана"}</UserMail>

      <UserTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </UserTheme>

      <ExitButton type="button">
        <Link to="/exit">Выйти</Link>
      </ExitButton>
    </PopUserWrapper>
  );
}

export default PopUser;