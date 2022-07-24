import { textSpanContainsPosition } from "typescript";
import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  test("retorna false para 'Raylane'", () => {
    const ehPalindromo = checaPalindromo("Raylane");
  expect(ehPalindromo).toEqual(false);
});

  test("retorna true false 'Jhennyfer'",() => {
    const ehPalindromo = checaPalindromo("Jhennyfer");
    expect(ehPalindromo).toEqual(false);
  });

  test("retorna true para 'arara'",() => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });

});
