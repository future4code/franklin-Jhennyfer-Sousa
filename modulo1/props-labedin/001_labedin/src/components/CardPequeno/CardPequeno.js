import React from 'react';
import styled from 'styled-components';

const CardPequenoImg = styled.img` //styled 
    height: 50px;
    width: 50px;
`

const Small = styled.div` //styled 
    display: flex;
    align-items: center;
    border: 5px solid rgb(231, 217, 13);
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

function CardPequeno(props) {
    return (
        <Small>
            <CardPequenoImg src={ props.imagem } />
            <div>
                <p> <b>{ props.identificador}: </b> { props.nomep}</p>
            </div>
        </Small>
    )
}

export default CardPequeno;