import React from "react";
import cadastro from "../../assets/cadastro.png"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SignUpForm";
import { CadastroContainer, CadastroImg } from "./styledSignUp";

//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const SignUpPage = ({setRightButtonText})=>{
    useUnprotectedPage()
    return (
        <CadastroContainer>
            <CadastroImg src={cadastro}/>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </CadastroContainer>
    )

}

export default SignUpPage