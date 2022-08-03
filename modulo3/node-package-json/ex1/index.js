/* Para simular a chegada de uma requisição, passaremos valores de entrada pelo terminal, que serão acessados 
no código pela propriedade process.argv */
/* Para executar os comandos alteramos a area de scripts do arquivo package.json passando os argumentos com os comandos
personalizados, como por exemplo: "start": "node ./index.js Jhennyfer 27" */

nome = process.argv[2]
idade = Number(process.argv[3])
futuro = idade + 7

console.log("\033[0;32m Ola, seu nome é", nome, "e sua idade é", idade," \033[1;35m anos. Em sete anos sua idade será", futuro,"\033[1;34m anos." )