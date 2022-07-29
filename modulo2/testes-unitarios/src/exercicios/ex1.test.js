import { textSpanEnd } from "typescript";
import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
  test("retorna true pra 1600", () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2000", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 1996", () => {
    const resultado = checaBissexto(1996);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2008", () => {
    const resultado = checaBissexto(2008);

    expect(resultado).toEqual(true);
  });

  test("retorna false pra 2007", () => {
    const resultado = checaBissexto(2007);

    expect(resultado).toEqual(false);
  });

  test("retorna false pra 2022", () => {
    const resultado = checaBissexto(2022);

    expect(resultado).toEqual(false);
  });

  test("retorna false pra 1995", () => {
    const resultado = checaBissexto(1995);

    expect(resultado).toEqual(false);
  });

  test("retorna false pra 1994", () => {
    const resultado = checaBissexto(1994);

    expect(resultado).toEqual(false);
  });

});
