import { Link } from "react-router-dom";

import {
  RegisterWrapper,
  RegisterBlock,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  RegisterText,
  RegisterLink,
} from "./RegisterPage.styled";

function RegisterPage() {
  return (
    <RegisterWrapper>
      <RegisterBlock>
        <RegisterTitle>Регистрация</RegisterTitle>

        <RegisterForm>
          <RegisterInput type="text" placeholder="Имя" />

          <RegisterInput type="email" placeholder="Эл. почта" />

          <RegisterInput type="password" placeholder="Пароль" />

          <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
        </RegisterForm>

        <RegisterText>
          Уже есть аккаунт?{" "}
          <RegisterLink as={Link} to="/login">
            Войдите здесь
          </RegisterLink>
        </RegisterText>
      </RegisterBlock>
    </RegisterWrapper>
  );
}

export default RegisterPage;
