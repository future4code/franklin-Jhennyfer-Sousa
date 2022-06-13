import React from 'react';
import styled from 'styled-components';

const CardGrandeImg = styled.img` //styled 
    width: 100px;
    height: 100px;
    margin-right: 10px;
    border-radius: 10%;
`

const BigCardContainer = styled.div` //styled 
    display: flex;
    align-items: center;
    border: 5px solid rgb(231, 217, 13);
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px; 
`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <CardGrandeImg src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}


export default CardGrande;