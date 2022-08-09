import { findAllByDisplayValue, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

jest.mock("axios");
// a partir de agora
// axios.get = () => {} // return undefined
describe("UI tests", () => {
  test("Procurar pela palavra pokemon na tela", async () => {
    render(<App />);
    const palavra = screen.getByText(/pokemon/);

    expect(palavra).toBeInTheDocument();
  });

  test.skip("Tela deve mostrar listagem de pokemons", async () => {});

  test.skip("Botão de pegar pokemons deve pegar um pokemon", async () => {});
});