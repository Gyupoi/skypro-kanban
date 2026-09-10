import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";

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

  const [isLoading, setIsLoading] = useState(false);

  const hasErrors = errors.email || errors.password;

  const handleLogin = async (event) => {
    event.preventDefault();

    const newErrors = {
      email: false,
      password: false,
      emailMessage: "",
      passwordMessage: "",
    };

    if (!email.trim()) {
      newErrors.email = true;
      newErrors.emailMessage = "Введите эл. почту";
    }

    if (!password.trim()) {
      newErrors.password = true;
      newErrors.passwordMessage = "Введите пароль";
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return;
    }

    try {
      setIsLoading(true);

      const data = await loginUser(email.trim(), password);

      localStorage.setItem("token", data.user.token);
      localStorage.setItem("isAuthenticated", "true");

      navigate("/");
    } catch (error) {
      setErrors({
        email: true,
        password: true,
        emailMessage: "",
        passwordMessage:
          "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginWrapper>
      <LoginBlock>
        <LoginTitle>Вход</LoginTitle>

        <LoginForm onSubmit={handleLogin}>
          <LoginInput
            type="text"
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

          <LoginButton type="submit" disabled={isLoading || Boolean(hasErrors)}>
            {isLoading ? "Вход..." : "Войти"}
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