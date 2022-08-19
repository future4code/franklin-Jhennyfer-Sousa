### Exercicio 1  (ALTER)

- Adiciona uma coluna na tabela de Actor para representar o sabor de sorvete favorito da celebridade

```sh
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
```


- Coluna type com o valor "NotDirector"

```sh
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
```

1) Rode os comandos e descreva o que acontece

a) ALTER TABLE Actor DROP COLUMN salary;

Altera a tabela Actor, removendo a coluna salary

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

Muda o nome da coluna gender para sex e seu tipo passa a ser VARCHAR(6)

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

Se o comando for rodado na sequência dos anteriores, o resultado da erro pois não existe mais a coluna com o nome gender. 

d) Altere a coluna gender da tabela Actor para VARCHAR(100)
```sh
    ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercicio 2 (UPDATE)

a) Query que altere o nome e a data de nascimento do Actor com o id 003 
    ```sh
    UPDATE Actor
    SET name = "Demi Moore", birth_date = "1930-09-10"
    WHERE id = "003"
    ```

b) Altere para JULIANA PAES onde o nome é Juliana Paes
    ```sh
    UPDATE Actor
    SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes"
    ```

query para voltar ao nome anterior 
    ```sh
    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES"
     ```
c) Mude as informações do Actor com o id 005
    ```sh
    UPDATE Actor
    SET name = "Angelina Jolie", salary = 1000000, birth_date="1990-01-04", gender="female"
    WHERE id = "005"
     ```

d) tentando atualizar a tabela indicando um id que não existe
    ```sh
    UPDATE Actor
    SET name = "Leonardo Dicaprio", salary = 1000000, birth_date="1991-03-08" 
    WHERE id = "007"
    ```

0 linha(s) afetada(s) Linhas correspondidas: 0 Alterado: 0 Avisos: 0 0,266 segundos
09:56:35 

### Exercicio 3 (DELETE)

a) Escreva uma query que apague a atriz com o nome `Fernanda Montenegro` (Escolhi outro nome para apagar)
    ```sh
    DELETE FROM Actor WHERE name = "Antônio Fagundes
    ```sh

b) Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00
    ```sh
    DELETE FROM Actor WHERE gender = "male" AND salary > 1000000
    ```


### Exercicio 4 (função MySQL)

a) Escreva uma query que pegue o maior salário de todos os atores e atrizes

    ```sh
    SELECT MAX(salary) FROM Actor
    ```

b) Escreva uma query que pegue o menor salário das atrizes

    ```sh
    SELECT MIN(salary) FROM Actor WHERE gender = "female"
    ```

c) Escreva uma query que pegue a quantidade de atrizes

    ```sh
    SELECT COUNT(*) FROM Actor WHERE gender = "female"
    ```

d) Escreva uma query que pegue a soma de todos os salários

    ```sh
    SELECT SUM(salary) FROM Actor
    ```

### Exercicio 5 (LIMIT, ORDER BY e GROUP BY)

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras

Esta query seleciona o genero e retorna a quantidade de atores e atrizes na tabela

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
    ```sh
    SELECT id, name FROM Actor
    ORDER BY name DESC;  
    ```
c) Faça uma query que retorne todos os atores ordenados pelo salário
    ```sh
    SELECT * FROM Actor
    ORDER BY salary;
    ```
d) Faça uma query que retorne os atores com os três maiores salarios
    ```sh
    SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3;
    ```
e) Faça uma query que retorne a média de salário por gênero
    ```sh
    SELECT AVG(salary), gender FROM Actor
    GROUP BY gender;
    ```

### Exercicio 6

a) Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.

```sh
ALTER TABLE Movie ADD playing_limit_date DATE;
 
```

b) Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.

```sh
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído.

```sh
UPDATE Movie
SET
playing_limit_date = "2022-08-29"
WHERE id = "03"
```

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
