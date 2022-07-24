import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true pra [1, 2 ,1]", () =>{
        const resultado = checaItensDuplicados([1, 2 ,1]);

    expect(resultado).toEqual(true);
    })

    test("retorna false pra ['a', 'b' ,'c']", () =>{
        const resultado = checaItensDuplicados(['a', 'b' ,'c']);

    expect(resultado).toEqual(false);
    })

    test("retorna false pra ['h', 'i' ,'j']", () =>{
        const resultado = checaItensDuplicados(['h', 'i' ,'j']);

    expect(resultado).toEqual(false);
    })

    test("retorna true pra [5, 6, 8, 5, 9]", () =>{
        const resultado = checaItensDuplicados([5, 6, 8, 5, 9]);

    expect(resultado).toEqual(true);
    })

});
