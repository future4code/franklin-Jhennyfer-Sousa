import React from "react";
import logo from "../../assets/logo.png";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/user";
import { InputContainer, InputArea, ButtonArea } from "./styledSignUp";
import { useNavigate } from "react-router-dom";


//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const SignUpForm = ({setRightButtonText})=>{
    const [form, handleIputChange, clear] = useForm({nome:"", email:"", password:""})
    const navigate = useNavigate()
    const onSubmitForm= (event) => {
        console.log(form)
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)
    }

    return (
        
            <InputContainer>
            <form onSubmit={onSubmitForm}>
            <InputArea name={"name"} value={form.name} onChange={handleIputChange} placeholder={"Nome"} required/>
            <InputArea name={"email"} type={"email"} value={form.email} onChange={handleIputChange} placeholder={"E-mail"} required/>
            <InputArea name={"password"} type={"password"} value={form.password} onChange={handleIputChange} placeholder={"Senha"} required/>
            <ButtonArea type={"submit"} >Cadastro</ButtonArea>
            </form>
            </InputContainer>
            
    )

}

export default SignUpForm