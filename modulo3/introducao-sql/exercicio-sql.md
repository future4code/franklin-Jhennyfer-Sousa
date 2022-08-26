## Atividade Introdução SQL

### Exercicio 01

a)VARCHAR: é uma string de no maximo (255) caractres.
PRIMARY KEY: é uma chave primaria que cada item deve possuir seu identificador único.
FLOAT: é usado para declarar números não inteiros.
DATE: representa uma data (YYYY-MM-DD)

b) O comando SHOW DATABASES exibiu os bancos de dados que tem. E o comando SHOW TABLES exibe a tabela que tem no banco de dados.

c) O comando DESCRIBE exibe a estrutura da tabela de atores.

### Exercicio 02

b) Menssagem de erro: "Código de erro: 1062. Entrada duplicada '002' para chave 'PRIMARY' ". Ao tentar inserir um usuario com um id ja existente da erro pois a chave ja esta sendo usada. 

c) Mensagem de erro: "A contagem de colunas não corresponde à contagem de valores na linha". O erro ocorreu pois não foi indicado as duas ultimas colunas (birth_date, gender). Depois de corrigir o erro o ator foi adicionado a tabela.

d) Mensagem de erro: "O campo 'nome' não tem um valor padrão". O erro ocorreu pois não foi indicado na coluna o 'nome' e nem adicionado o nome do ator na tabela. Depois de corrigir o erro o ator foi adicionado a tabela.

e) Mensagem de erro: "Valor de data incorreto: '1950' para a coluna 'birth_date' ". Foi informado na query o valor da data sem as aspas. Depois de colocar as aspas ("1979-03-26") o ator foi adicionado a tabela.

### Exercicio 03

a) SELECT * FROM Actor WHERE gender = "female"

b) SELECT salary FROM Actor WHERE name = "Tony Ramos" 

c) SELECT * FROM Actor WHERE gender = "invalid" . Como na tabela todo os dados estão corretos o resultado foi zero.

d) SELECT id, name, salary FROM Actor WHERE salary < 500000

e) Mensagem de erro: "Coluna desconhecida 'nome' na 'lista de campos' ". Este erro ocorre pois nao existe o campo nome. E depoisde corrigir para "name" o resultado foi: id 002 name Glória Pires

### Exercicio 04

a) Na query é selecionado a tabela de todos os atores e é verificado todos os atores que inicia o nome com a letra A ou J com o salario maior do que R$300.000.

b) SELECT * FROM Actor
WHERE (name NOT LIKE "A%" ) AND salary > 350000

c) SELECT * FROM Actor 
WHERE name LIKE "%g%" OR name LIKE "%G%"

d) SELECT * FROM Actor
WHERE
(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000

### Exercicio 05

a)
CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)
Essa query cria uma tabela de filmes.

b)

CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)

c) A query inseri na tabela Movie as infomaçoes do filme.

### Exercicio 06

a) SELECT id, title, rating FROM Movie WHERE id = "02"

b) SELECT title FROM Movie WHERE title = "O Auto da Compadecida"

c) SELECT id, title, synopsis FROM Movie WHERE rating > 7;

### Exercicio 07

a) SELECT * FROM Movie WHERE title LIKE "%vida%"

b) SELECT * FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR ynopsis LIKE "%TERMO DE BUSCA%"

c) SELECT * FROM Movie WHERE release_date < "2020-05-04"

d) SELECT * FROM Movie WHERE release_date < "2020-05-04" AND  (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;