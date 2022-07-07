import React from "react";
import {useProtectedPage} from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { ScreenContainer, RecipeImage, RecipeContainer } from "./styledRecipeDetailPage";

//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const RecipeDetailPage = ()=>{
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
    console.log(params)

    return (
        <ScreenContainer>
          {recipe &&   
            <RecipeContainer> 
                <RecipeImage src={recipe.image}/>
                <h1>{recipe && recipe.title}</h1>
                <p>{recipe.description}</p>
            </RecipeContainer>}
        </ScreenContainer>
    )

}

export default RecipeDetailPage