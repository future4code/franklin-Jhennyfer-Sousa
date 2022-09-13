### Exercicio 01

 a) Explique como é a resposta que temos quando usamos o `raw`.

Ele devolve a resposta diretamente do banco de dados trazendo resultado da query e outras informaçoes
gerais referente a requisição.

 b) Faça uma função que busque um ator pelo nome;

```sh
const allActors = async (): Promise<any> => {
    const result = await connection(`Actor`)
    return result
  }
```

 c) Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`.

```sh
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    const count = result[0][0].count;
    return count;
  };
```

### Exercicio 02

 a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão.

 ```sh

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };
```

 b) Uma função que receba um id e delete um ator da tabela.

 ```sh
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 
```

 c) Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`.

 ```sh
 const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
  };
  ```
  
### Exercicio 03
    
 a) Crie um endpoint com as especificações acima

 b) Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

```sh
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
### Exercicio 04
Crie um endpoint para cada uma das especificações abaixo:

 a) Endpoint para atualizar salário com id
    - Deve ser um PUT (`/actor`)
    - Receber o salário e o id pelo body
    - Simplesmente atualizar o salário do ator com id em questão

```sh
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };
```

 b) Endpoint para deletar ator da tabela.

 ```sh
 const deleteActorById = async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
}
```