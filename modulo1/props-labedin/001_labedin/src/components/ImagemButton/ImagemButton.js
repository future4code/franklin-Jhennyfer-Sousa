import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
 display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 180px;
    height: 60px;
    padding: 10px;
    margin: 10px auto;
`
const ButtonImg = styled.img`
    width: 50px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <ButtonContainer>
            <ButtonImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ButtonContainer>

    )
}

export default ImagemButton;