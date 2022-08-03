import App from "./App"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Pagina do contador", () => {
    test("Botão de soma altera o valor do contador de zero para 1 quando clicado", () =>{

        //passo 1 - renderizar o elemento 
        const { getByText } = render(<App/>) 

        //passo 2 - selecionar o elemento
        const botaoSomar = getByText(/Somar/i)

        //passo 3 - simular o evento de usuario
        userEvent.click(botaoSomar)

        //passo 4 - achei o contador pelo texto
        const contador = getByText(/Contador/i)

        // teste efetivamente, espero que  contador tenha o texto Contador: 1 
        expect(contador).toHaveTextContent("Contador: 1")

    })

})