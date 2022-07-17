import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { CadastroUser } from '../Pages/CadastroUser/CadastroUser';
import { ListaUser } from '../Pages/ListaUser/ListaUser'


export const Router = () => {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route element={<CadastroUser/>} path="/"/>
                <Route element={<ListaUser/>} path="/users"/> 
            </Routes>
        </BrowserRouter>
    )
}