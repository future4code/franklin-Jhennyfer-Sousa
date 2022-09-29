

## Exercicio 3

a) Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação

```
export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  }; 
  ```

c) Explique, com as suas palavras, as diferenças entre as duas implementações

A diferença entre as duas implementações é que com a inversão de dependencias a função de performAttack utiliza outra função como uma de suas entradas para validar as informações dos personagens.

## Exercicio 4

a) De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes? Justifique.

Deveremos criar o mock da performAttack porque a função validateCharacter esta utilizando ela.

b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento

```
describe("Testando a função performAttack", () => {
  test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});
```  

c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento

```
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});
})
```

## Exercicio 5

a. Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.

b. Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, o que ela retornou e quantas vezes ela retornou. 

