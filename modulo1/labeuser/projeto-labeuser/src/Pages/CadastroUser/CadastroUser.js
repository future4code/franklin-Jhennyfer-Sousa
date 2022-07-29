import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {ButtonArea, CadastroContainer, InputArea, CadastroImg} from './styledCadastroUser';
import { IrParaLista } from '../../Routes/coordinator';
import cadastro from '../../assets/cadastro.png'



export const CadastroUser = () => {
    const  [inputUser, setInputUser] = useState('')
    const  [inputEmail, setInputEmail] = useState('')
    const navigate = useNavigate()

     const criarUsuario = () => {
        const body = {name: inputUser, email: inputEmail}

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,{
                headers: {
                    Authorization:"jhennyfer-sousa-franklin",
                }
            }
        )
        .then((response) => {
            console.log(response)
            alert('Cadastro enviado com sucesso')
            setInputUser('')
            setInputEmail('')
        })
        .catch((error) => {
            console.log(error)
            alert('Erro no envio, verifique mais informaçoes')
        })
    } 

    const atualizaInputName = (event) => {
        setInputUser(event.target.value)
      }

    const atualizaInputEmail = (event) => {
        setInputEmail(event.target.value)
      } 

return (
        
   
       <CadastroContainer>
         <CadastroImg src={cadastro}/>
        <InputArea type={"text"} value={inputUser} onChange={atualizaInputName} placeholder={"Nome"} required/>
        <InputArea type={"email"} value={inputEmail} onChange={atualizaInputEmail} placeholder={"E-mail"} required/>
    <ButtonArea onClick={() => IrParaLista(navigate)}>Ver Lista de usuários</ButtonArea>
     <ButtonArea onClick={criarUsuario}>Cadastrar</ButtonArea>
    </CadastroContainer> 
    

    )
}