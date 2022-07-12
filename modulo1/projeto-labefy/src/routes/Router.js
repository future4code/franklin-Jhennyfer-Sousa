import { CadastroPlayList } from "../Pages/CadastroPlayList/CadastroPlayList";
import {PlayList} from "../Pages/PlayList/PlayList";
import {Routes, Route} from "react-router-dom"

export const Router = () => {
    return(
        <Routes>
            <Route element={<CadastroPlayList/>} path={'/'} />

            <Route element={<PlayList/>} path={'/playlists'}/>
        </Routes>

    )


} 