import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import AddForm from "./AddForm";
import { ScreenContainer } from "./styledAddRecipes";

//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const AddRecipesPage = () => {
  useProtectedPage();
  return (
    <ScreenContainer>
      <h1>Adicionar Receita</h1>
      <AddForm />
    </ScreenContainer>
  );
};

export default AddRecipesPage;
