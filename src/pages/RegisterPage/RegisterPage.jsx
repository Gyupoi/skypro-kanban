import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const hasErrors = errors.name || errors.email || errors.password;

  const handleRegister = (event) => {
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
    }

    if (name.trim() && email.trim() && password.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email.trim())) {
        newErrors.email = true;

        newErrors.message =
          "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.";
      }
    }

    if (name.trim() && email.trim() && password.trim()) {
      const savedUser = localStorage.getItem("user");

      if (savedUser) {
        const user = JSON.parse(savedUser);

        if (email.trim() === user.email) {
          newErrors.email = true;

          newErrors.message =
            "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.";
        }
      }
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.password) {
      return;
    }

    const user = {
      name: name.trim(),
      email: email.trim(),
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/login");
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

          {errors.message && <RegisterError>{errors.message}</RegisterError>}

          <RegisterButton type="submit" disabled={hasErrors}>
            Зарегистрироваться
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
