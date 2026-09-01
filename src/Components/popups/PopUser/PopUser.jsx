import { Link } from "react-router-dom";

import {
  PopUserWrapper,
  UserName,
  UserMail,
  UserTheme,
  ExitButton,
} from "./PopUser.styled";

function PopUser() {
  return (
    <PopUserWrapper>
      <UserName>Ivan Ivanov</UserName>

      <UserMail>ivan.ivanov@gmail.com</UserMail>

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