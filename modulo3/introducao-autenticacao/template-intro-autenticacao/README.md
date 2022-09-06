## EXERCICIO 01

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

A string é usada para poder ser usado tanto letras como números. E essa é a melhor forma pois se torna um id mais seguro.

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.

```typescript
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }
```

## EXERCICIO 02

```typescript
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const createUser = async (id: string, email: string, password: string) = {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
```

a) Explique o código acima com as suas palavras.

Foi criada uma variavel userTableName que recebe a tabela User que faz conexao com o banco de dados com o knex. A variavel createUser criacao de endpoint do usuario.

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.