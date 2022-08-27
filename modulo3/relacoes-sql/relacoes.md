### Exercicio 01

a) Explique o que é uma chave estrangeira.

    Chave estrangeira é o campo que estabelece o relacionamento entre duas tabelas.

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes.

QUERY PARA CRIAR A TABELA

```sh
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```
AVALIAÇÃO

```sh
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("001","Muito bom!",7,"01"), ("002", "Legal",5,"03"), ("003","DEMAAAIS",10,"04");
```

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

    Ao adicionar uma avalição com id inexistente ocorre o erro: "Código do erro: 1452. Não é possível adicionar ou atualizar uma linha filha: falha na restrição de chave estrangeira", pois não existe o id mencionado.

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

```sh
ALTER TABLE Movie DROP COLUMN rating;
```

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

```sh
DELETE FROM Movie WHERE id = 03
```

    Ao tentar apagar um filme que contem avaliação ocorreu o erro: "Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha", o erro ocorreu pois não é possivel excluir ou atualizar uma linha pai.

### Exercicio 02

a) Explique, com as suas palavras, essa tabela.

```sh
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id INT(11),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

    Foi criada uma tabela "MovieCast"(elenco do filme) com duas "FOREIGN KEY"(chave estrangeira) diferentes uma para referenciar o movie_id e outra para referenciar o actor_id. Para occorer o relacionamento de N:M a tabela elenco faz a relação contendo essas duas chaves estrangeiras.

b) Crie, ao menos, 6 relações nessa tabela.

Exemplo:

```sh
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("06", 6);
```

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query.

```sh
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("05",1);
```

    Foi tentado criar uma relação com um ator inexistente e ocorreu o erro: "Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha". Ja que o ator não existe não é possivel fazer relação com o id inexistente.

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query.

```sh
DELETE FROM Actor WHERE id = 2
```

    Ao tentar apagar o ator ocorreu o erro: "Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha". O erro ocorreu pois não é possivel excluir ou atualizar uma linha pai.

### Exercicio 03

```sh
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

a) Explique, com suas palavras, a query acima. O que é o operador `ON`?


    Nesta query é selecionado todos os filmes e retorna registros relacionados nas duas tabelas "Rating" e "Movie".
    O operador ON é uma clausula utilizada que utilizamos quando especificamos o JOIN. Junção explicita.


b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

```sh
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```