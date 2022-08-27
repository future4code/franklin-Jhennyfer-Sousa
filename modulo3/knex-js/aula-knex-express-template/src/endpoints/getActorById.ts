import {Request, Response} from 'express'
import connection from '../connection'

//FUNÇÃO BUSCA O ATOR PELO ID
const actorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

//FUNÇÃO QUE FAZ A REQUISIÇÃO
const getActorById = async (request: Request, response: Response) => {
    try{
        const actorA = await actorById(request.params.id)
        response.status(200).send(actorA)

    } catch(error){
        response.status(404).send(error)
    }
}

export default getActorById