import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  LoginWrapper,
  LoginBlock,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginText,
  LoginLink,
  LoginError,
} from "./LoginPage.styled";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    emailMessage: "",
    passwordMessage: "",
  });

  const hasErrors = errors.email || errors.password;

  const handleLogin = (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const newErrors = {
      email: false,
      password: false,
      emailMessage: "",
      passwordMessage: "",
    };

    if (!email.trim()) {
      newErrors.email = true;
    }

    if (!password.trim()) {
      newErrors.password = true;
    }

    if (email.trim() && password.trim()) {
      if (!user || email !== user.email || password !== user.password) {
        newErrors.email = true;
        newErrors.password = true;

        newErrors.passwordMessage =
          "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.";
      }
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    localStorage.setItem("isAuthenticated", "true");

    navigate("/");
  };

  return (
    <LoginWrapper>
      <LoginBlock>
        <LoginTitle>Вход</LoginTitle>

        <LoginForm onSubmit={handleLogin}>
          <LoginInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            $error={errors.email}
            onChange={(event) => {
              setEmail(event.target.value);

              setErrors((prev) => ({
                ...prev,
                email: false,
                emailMessage: "",
              }));
            }}
          />

          {errors.emailMessage && (
            <LoginError>{errors.emailMessage}</LoginError>
          )}

          <LoginInput
            type="password"
            placeholder="Пароль"
            value={password}
            $error={errors.password}
            onChange={(event) => {
              setPassword(event.target.value);

              setErrors((prev) => ({
                ...prev,
                password: false,
                passwordMessage: "",
              }));
            }}
          />

          {errors.passwordMessage && (
            <LoginError>{errors.passwordMessage}</LoginError>
          )}

          <LoginButton type="submit" disabled={Boolean(hasErrors)}>
            Войти
          </LoginButton>
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
