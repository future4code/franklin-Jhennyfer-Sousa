import axios from "axios";
import React, { useState } from "react";
import { IrPlayList } from "../../routes/coordinator";
import {useNavigate} from "react-router-dom";
import {ButtonArea, InputArea, CadastroContainer, CadastroImg} from "./styledCadastro";
import Logo from "../../assets/playlist.png"


export const CadastroPlayList = () => {
  const [inputPlaylist, setInputPlaylists] = useState('');
  const navigate = useNavigate()

  const criaPlaylist = () => {
    const body = { name: inputPlaylist };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "jhennyfer-sousa-franklin",
          },
        }
      )
      .then((response) => {
        setInputPlaylists('')
        alert("Playlist criada com sucesso")
      })
      .catch((error) => {
        alert("Ocorreu um erro");
      })
  };

  const handleInputNome = (event) => {
    setInputPlaylists(event.target.value)
  }

  return (
    <div className="App">
      <CadastroContainer>
        <CadastroImg src={Logo}/>
      <InputArea value={inputPlaylist} onChange={handleInputNome}></InputArea>
      <ButtonArea onClick={criaPlaylist}>Cria uma nova playlist</ButtonArea>
      <ButtonArea onClick={()=> IrPlayList(navigate)}>Ir para playlists</ButtonArea>
    </CadastroContainer>
    </div>
  );
};

