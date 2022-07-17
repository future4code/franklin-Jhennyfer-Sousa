import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { ListaContainer, ButtonArea, ListaImg } from './styledListaUser';
import { IrCriarUsuario} from '../../Routes/coordinator';
import lista from '../../assets/lista.png'

export const ListaUser = () => {
    const  [usuarios, setUsuarios] = useState([])
    const navigate = useNavigate()

     const listaNomes = () => {

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            {
                headers: {
                    Authorization:"jhennyfer-sousa-franklin",
                }
            }
        )
        .then((response) => {
            console.log(response)
            setUsuarios(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    } 
    useEffect(listaNomes, [])


return (
      
    <ListaContainer>
       <ListaImg src={lista}/>
       <h1>Lista de usuários</h1>
       {usuarios && usuarios.map((nomesLista)=> {
        return <p key={nomesLista.id}>{nomesLista.name}</p>
       })}
       <ButtonArea onClick={() => IrCriarUsuario(navigate)}>Cadastro</ButtonArea>
    </ListaContainer> 
    )
}