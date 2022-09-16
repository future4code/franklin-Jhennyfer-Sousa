## EXERCICIO 01

a) O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?

    Round: custo numérico que está relacionado à segurança da senha. 
    Salt: é uma string aleatoria que é adicionada na senha.
    O valor usado foi o ´12´, por ser o padrão na maioria das libs.

## EXERCICIO 02 

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

Para realizar o teste de forma correta o primeiro a ser modificado foi o cadastro, pois nesse endpoint o usuário
fornece a senha e assim ela é criptografada para armazenar no banco de dados.

d) No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.

Não. Nesse endpoint foi utilizado apenas o token para exibir as informações.