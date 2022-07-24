import { ordemCrescente } from "./ex4";

describe("Checa se numeros estao crescente ou decrescente", () => {
    test("retorna em ordem crescente [1 ,2 ,3 ,4]", () =>{
        const resultado = ordemCrescente([1 ,2 ,3 ,4]);

    expect(resultado).toEqual([1 ,2 ,3 ,4]);
    })

    test("retorna em ordem crescente [3, 5, 9, 2]", () =>{
        const resultado = ordemCrescente([3, 5, 9, 2]);

    expect(resultado).toEqual([2, 3, 5, 9]);
    })
});
