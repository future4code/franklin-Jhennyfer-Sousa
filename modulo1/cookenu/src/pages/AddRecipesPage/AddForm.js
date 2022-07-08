import React from "react";
import useForm from "../../hooks/useForm";
import { InputContainer, InputArea, ButtonArea } from "./styledAddRecipes";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../services/recipe";

//DEFINIÇÃO DE COMPONENTE: É ALGO QUE VAI RETORNA UM LAYOUT EM JSX
const AddForm = () => {
  const [form, handleIputChange, clear] = useForm({
    title: "",
    description: "",
    image: "",
  });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    createRecipe(form, clear);
  };

  return (
    <InputContainer>
      <form onSubmit={onSubmitForm}>
        <InputArea
          name={"title"}
          value={form.title}
          onChange={handleIputChange}
          placeholder={"Titulo"}
        />
        <InputArea
          name={"description"}
          value={form.description}
          onChange={handleIputChange}
          placeholder={"Descrição"}
        />
        <InputArea
          name={"image"}
          value={form.image}
          onChange={handleIputChange}
          placeholder={"Imagem"}
        />
        <ButtonArea type={"submit"}>Adicionar Receita</ButtonArea>
      </form>
    </InputContainer>
  );
};

export default AddForm;
