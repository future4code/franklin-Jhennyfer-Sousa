### IWFS - Rodada de cases 

## EstanteVirtual

Esta case Teste prático da EstanteVirtual foi escolhida pela afinidade que tive. 

## Jogos Olímpicos
Com a chegada dos jogos olímpicos, fomos designados para construir uma API REST para o COB (Comitê Olímico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

100m rasos: Menor tempo vence
Lançamento de Dardo: Maior distância vence

## API
Através da API, deveremos ser capazes de:

    1.Criar uma competição
    2.Cadastrar resultados para uma competição (todos os campos são obrigatórios), ex:

```
{
  "competicao": "100m classificatoria 1", 
  "atleta": "Joao das Neves", 
  "value": "10.234", 
  "unidade": "s"
}
```

````
{
  "competicao": "Dardo semifinal", 
  "atleta": "Claudio", 
  "value": "70.43", 
  "unidade": "m"
}
````

    3.Finalizar uma competição.
    4.Retornar o ranking da competição, exibindo a posição final de cada atleta.

## Detalhes:

    1. A API não deve aceitar cadastros de resultados se a competição já estiver encerrada.
    2. A API pode retornar o ranking/resultado parcial, caso a disputa ainda não estiver encerrada.
    3. No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta.
    4. O Design da API, bem como input e output dos dados, fica a seu critério, sendo inclusive um dos pontos de avaliação.
    5. Testes são obrigatórios.



SELECT athlete.name, result.value FROM athlete LEFT JOIN result ON athlete.id = result.athlete_id WHERE result.competition_id = '01' ORDER BY result.value DESC
