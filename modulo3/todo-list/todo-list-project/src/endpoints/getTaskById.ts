import {Request, Response} from 'express'
import connection from '../connection'

const taskById = async (id: any): Promise<any> => {
      const result = await connection.raw(`
      SELECT * FROM TodoListTask tlt JOIN TodoListUser tlu ON tlu.id = '${id}'
    `)
  
      return result[0][0]
  }

const getTaskById = async (request: Request, response: Response) => {
    try{
        const task = await taskById(request.params.id)

        if (!task) {
        response.status(401).send({message: "Tarefa não encontrada!"})
        }

        response.status(200).send(task)

    } catch(error){
        response.status(404).send(error)
    }
}

export default getTaskById