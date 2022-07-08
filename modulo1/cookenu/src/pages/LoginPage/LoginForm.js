import React from "react";
import logo from "../../assets/logo.png";
import useForm from "../../hooks/useForm";
import { InputContainer, InputArea, ButtonArea } from "./styledLoginPage";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";

//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const LoginForm = ({ setRightButtonText }) => {
  const [form, handleIputChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
    login(form, clear, navigate, setRightButtonText);
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <InputArea
          name={"email"}
          type={"email"}
          value={form.email}
          onChange={handleIputChange}
          placeholder={"E-mail"}
          required
        />
        <InputArea
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={handleIputChange}
          placeholder={"Senha"}
          required
        />
        <ButtonArea type={"submit"}>Login</ButtonArea>
      </form>
    </InputContainer>
  );
};

export default LoginForm;
