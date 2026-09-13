import styled from "styled-components";

export const RegisterWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e9edf5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterBlock = styled.div`
  width: 368px;
  min-height: 345px;
  padding: 50px 60px;

  background-color: #ffffff;
  border-radius: 5px;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const RegisterTitle = styled.h2`
  margin-bottom: 20px;

  text-align: center;
  font-size: 20px;
  font-weight: 700;

  color: #000000;
`;

export const RegisterForm = styled.form`
  width: 100%;
`;

export const RegisterInput = styled.input`
  width: 100%;
  height: 30px;

  margin-bottom: 7px;
  padding: 8px 10px;

  border: 1px solid ${({ $error }) => ($error ? "#FF0000" : "#d4dbe5")};
  border-radius: 8px;
  outline: none;

  font-size: 14px;
  color: #000000;

  &::placeholder {
    color: #94a6be;
    font-size: 14px;
  }

  &:focus {
    border-color: #565eef;
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 30px;

  margin-top: 13px;

  border: none;
  border-radius: 4px;

  background-color: #565eef;
  color: #ffffff;

  font-size: 14px;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #94a6be;
    cursor: not-allowed;
  }
`;

export const RegisterText = styled.p`
  margin-top: 20px;

  text-align: center;
  font-size: 14px;
  color: #94A6BE;
  font-weight: 300;
`;

export const RegisterLink = styled.a`
  color: #94A6BE;
  text-decoration: underline;
  font-weight: 300;
`;

export const RegisterError = styled.p`
  margin: -3px 0 7px;
  font-size: 12px;
  line-height: 16px;
  color: #ff0000;
`;