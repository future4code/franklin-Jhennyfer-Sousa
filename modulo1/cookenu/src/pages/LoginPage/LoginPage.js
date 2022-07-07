import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import LoginForm from "./LoginForm";
import {
  LogoImg,
  ScreenContainer,
  ButtonArea,
  LoginContainer,
} from "./styledLoginPage";
import { goToSignUp } from "../../routes/coodinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const LoginPage = ({ rightButtonText, setRightButtonText }) => {
  const navigate = useNavigate();
  useUnprotectedPage();

  return (
    <ScreenContainer>
      <LoginContainer>
        <LogoImg src={logo} />
        <LoginForm
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />
        <ButtonArea onClick={() => goToSignUp(navigate)}>Cadastro</ButtonArea>
      </LoginContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
