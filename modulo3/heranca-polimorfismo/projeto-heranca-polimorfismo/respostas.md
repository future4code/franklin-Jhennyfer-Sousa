# Herança

## Exercicio 01
a) Seria possível imprimir a senha (`password`) atrelada a essa instância?

Não pois ele é privado e não tem um atributo get para chama-lo.

b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

A mensagem foi impressa apenas uma vez.

## Exercicio 02

a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?

A mensagem foi impressa apenas uma vez.

b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?

A mensagem foi impressa apenas uma vez. Cada mensagem foi impresa uma vez na sequencia de classe pai para classe filho.

## Exercicio 3

a) Seria possível imprimir a senha (`password`) atrelada a essa instância? Por quê?


# Polimorfismo

## Exercicio 1

a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?

Ao chamar o metodo client ele retornou no terminal {name,  registrationNumber, consumedEnergy,  calculateBill} e seus respectivos valores, exeto de calculeteBill.

```typescript
{
  name: 'Lane',
  registrationNumber: 1,
  consumedEnergy: 100,
  calculateBill: [Function: calculateBill]
}
```

Para retornar o valor de calculateBill é necessario chamar o métado: 

```typescript
console.log(client.calculateBill())
```


a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`). Qual foi o erro que o Typescript gerou?


src/index.ts:31:17 - error TS2511: Cannot create an instance of an abstract class.

31   const place = new Place('68140000')
                   ~~~~~~~~~~~~~~~~~~~~~


Found 1 error.


b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?

Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

Esse exercício vai responder melhor a essas três perguntas: 

1) O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)

2) Por que a `Place` não é uma interface?

Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

3) Por que a classe `Place` é uma Classe Abstrata?

Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

## Exercicio 4

a) Que métodos e propriedades essa classe possui? Por quê?

Ele possui a propriedade CPF e não possui nenhum método. Porque as demais propiedades estao sendo herdadas das classes Residence e da interface client.

## Exercicio 5

a) Quais as semelhanças dessa classe com a `ResidentialClient`?

As duas classes implemantam as propriedades e o método da interface client. 

b) Quais as diferenças dessa classe com a `ResidentialClient`?

A classe para qual ele se extende é diferente: 

```typescript
class CommercialClient extends Commerce
```

Outra diferença entre elas é o calculo de consumo de energia.

## Exercicio 6

a) De qual classe a `IndustrialClient` deve ser filha? Por quê?

Ela é filha da qual ela se extende a Industrial.

b) Que interface a `IndustrialClient` implementa? Por quê?

Ela implementa a interface Client. Porque todo Clint utiliza os atributos dessa interface

c) Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?

Porque os outros getters sao herdados das outras classes.