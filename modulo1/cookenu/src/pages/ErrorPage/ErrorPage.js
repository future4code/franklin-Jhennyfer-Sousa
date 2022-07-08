import React from "react";
import { ErrorPageContainer, ErrorImage } from "./styledError";
import Error404 from "../../assets/error404.png"

//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const ErrorPage = ()=> {
    return (
        <ErrorPageContainer>
            <ErrorImage src={Error404} />
        </ErrorPageContainer>
    )

}

export default ErrorPage