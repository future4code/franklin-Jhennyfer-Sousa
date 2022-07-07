import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage';
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage';
import SingUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = ({setRightButtonText}) => {
    return(
            <Routes>
                <Route element={ <LoginPage setRightButtonText={setRightButtonText}/>} path="/login"/>                 
               
                <Route element={<SingUpPage/>} path="/cadastro"/>
                         
                <Route element={ <RecipesListPage/>} path="/"/>
                            
                <Route element={<AddRecipesPage/>} path ="/adicionar-receita"/>                        

                <Route element={<RecipeDetailPage/>} path ="/detalhe/:id"/>          

                <Route element={<ErrorPage/>} path="*"/>
            
            </Routes>

    )
}

export default Router