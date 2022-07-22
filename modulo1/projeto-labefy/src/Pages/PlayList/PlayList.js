import axios from "axios";
import React, { useEffect, useState } from "react";
import { IrCadastro } from "../../routes/coordinator";
import { useNavigate} from "react-router-dom"
import { ButtonArea, ListaContainer } from "./styledPlayList";

export const PlayList = () => {
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate()

  const pegaPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",

        {
          headers: {
            Authorization: "jhennyfer-sousa-franklin",
          },
        }
      )
      .then((response) => {
        setPlaylists(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  useEffect(pegaPlaylist, []);

  return (
    <div className="App">
      <ListaContainer>
        <ButtonArea onClick={()=> IrCadastro(navigate)}>Adicionar Playlist</ButtonArea>
      {playlists.map((playlist) => {
        return <li key={playlist.id}>{playlist.name}</li>;
      })}
      </ListaContainer>
    </div>
  );
};

