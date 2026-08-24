import {
  LoginWrapper,
  LoginBlock,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginText,
  LoginLink,
} from "./LoginPage.styled";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <LoginWrapper>
      <LoginBlock>
        <LoginTitle>Вход</LoginTitle>

        <LoginForm>
          <LoginInput type="email" placeholder="Эл. почта" />
          <LoginInput type="password" placeholder="Пароль" />

          <LoginButton type="submit">Войти</LoginButton>
        </LoginForm>

        <LoginText>Нужно зарегистрироваться?</LoginText>

        <LoginLink as={Link} to="/register">
          Регистрируйтесь здесь
        </LoginLink>
      </LoginBlock>
    </LoginWrapper>
  );
}

export default LoginPage;
