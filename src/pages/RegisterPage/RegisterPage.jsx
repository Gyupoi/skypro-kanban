import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/api";

import {
  RegisterWrapper,
  RegisterBlock,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  RegisterText,
  RegisterLink,
  RegisterError,
} from "./RegisterPage.styled";

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const hasErrors =
    errors.name || errors.email || errors.password;

  const handleRegister = async (event) => {
    event.preventDefault();

    const newErrors = {
      name: false,
      email: false,
      password: false,
      message: "",
    };

    if (!name.trim()) {
      newErrors.name = true;
    }

    if (!email.trim()) {
      newErrors.email = true;
    }

    if (!password.trim()) {
      newErrors.password = true;
    }

    if (!name.trim() || !email.trim() || !password.trim()) {
      newErrors.message =
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.";

      setErrors(newErrors);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      newErrors.email = true;
      newErrors.message =
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.";

      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      setErrors(newErrors);

      await registerUser(
        email.trim(),
        name.trim(),
        password
      );

      navigate("/login");
    } catch (error) {
      setErrors({
        name: false,
        email: true,
        password: true,
        message:
          error.message ||
          "Не удалось зарегистрироваться. Попробуйте ещё раз.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterWrapper>
      <RegisterBlock>
        <RegisterTitle>Регистрация</RegisterTitle>

        <RegisterForm onSubmit={handleRegister}>
          <RegisterInput
            type="text"
            placeholder="Имя"
            value={name}
            $error={errors.name}
            onChange={(event) => {
              setName(event.target.value);

              setErrors((prev) => ({
                ...prev,
                name: false,
                message: "",
              }));
            }}
          />

          <RegisterInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            $error={errors.email}
            onChange={(event) => {
              setEmail(event.target.value);

              setErrors((prev) => ({
                ...prev,
                email: false,
                message: "",
              }));
            }}
          />

          <RegisterInput
            type="password"
            placeholder="Пароль"
            value={password}
            $error={errors.password}
            onChange={(event) => {
              setPassword(event.target.value);

              setErrors((prev) => ({
                ...prev,
                password: false,
                message: "",
              }));
            }}
          />

          {errors.message && (
            <RegisterError>
              {errors.message}
            </RegisterError>
          )}

          <RegisterButton
            type="submit"
            disabled={isLoading || hasErrors}
          >
            {isLoading
              ? "Регистрация..."
              : "Зарегистрироваться"}
          </RegisterButton>
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