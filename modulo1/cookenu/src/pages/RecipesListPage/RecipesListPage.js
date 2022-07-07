import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import { RecipesListContainer, AddRecipeButton } from "./styledRecipesPage";
import { useNavigate } from "react-router-dom";
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coodinator";

//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const RecipesListPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`);
  console.log(recipes);

  const onClickCard = (id) => {
    goToRecipeDetail(navigate, id);
  };

  const recipeCards = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    );
  });

  return (
    <RecipesListContainer>
      {recipeCards}
      <AddRecipeButton onClick={() => goToAddRecipes(navigate)}>
        {" "}
        +{" "}
      </AddRecipeButton>
    </RecipesListContainer>
  );
};

export default RecipesListPage;
