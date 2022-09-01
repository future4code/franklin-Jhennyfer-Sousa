import {Customer} from './Customer';
import {User} from './User'

//Exercicio 01
//a) Seria possível imprimir a senha (`password`) atrelada a essa instância?
// Não pois ele é privado e não tem um atributo get para chama-lo.
//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// A mensagem foi impressa apenas uma vez.

const userA = new User ('001', 'jhenny@hotmail.com', 'Jhennyfer Sousa', '123')
console.log(userA)

//Exercicio 02
//a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?

//b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?


