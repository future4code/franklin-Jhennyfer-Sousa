import React from 'react';
import { StyledNav, ButtonNav } from './styled';
import { useNavigate } from 'react-router-dom';
import { goToRecipeList, goToLogin } from '../../routes/coodinator';

//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const HeaderPage = ({rightButtonText, setRightButtonText}) => {
        const token = localStorage.getItem("token")
        const navigate= useNavigate()
        
        const logout = () => {
            localStorage.removeItem("token")
        }
    
        const rightButtonAction = () => {
            if (token) {
                logout()
                setRightButtonText("Login")
                goToLogin(navigate)
            } else{
                goToLogin(navigate)
            }
        }    

    return (
        <StyledNav>
            <ButtonNav onClick={() => goToRecipeList(navigate)}>Cookenu</ButtonNav>
            <ButtonNav onClick={rightButtonAction}>{rightButtonText}</ButtonNav>
        </StyledNav>
    )

}

export default HeaderPage