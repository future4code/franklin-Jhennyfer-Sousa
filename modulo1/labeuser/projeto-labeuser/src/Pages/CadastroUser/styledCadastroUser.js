import styled from "styled-components";

export const CadastroImg = styled.img`
    width: 50vw;
    max-width: 250px;
    

`
export const CadastroContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 10vh;
    
`
export const InputArea= styled.input`
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: none;
    font-size: 15px;
    padding: 10px;
    margin: 7px;
    height: 15px;
    
    &:hover {
    color: white;
    background-color: tan;
}
`
export const ButtonArea= styled.button`
background-color:#dcdcdc;
    color:#008080;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    width: 300px;
    height: 30px;
    margin-top: 5px;  
    &:hover {
    color: white;
    background-color: tan;
}
`
