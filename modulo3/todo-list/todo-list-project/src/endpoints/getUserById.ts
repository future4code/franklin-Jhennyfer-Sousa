import {Request, Response} from 'express'
import connection from '../connection'

//buscar pelo id
const userById = async (id: any): Promise<any> => {
      const result = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = '${id}'
    `)
  
      return result[0][0]

      /* const result = await connection()
      .select('*')
      .from("TodoListUser")
      .where('id', id);

      return result */
  }

//Buscar usuário pelo id
const getUserById = async (request: Request, response: Response) => {
    try{
        const user = await userById(request.params.id)

        if (!user) {
        response.status(401).send({message: "Usuário não encontrado!"})
        }

        response.status(200).send(user)

    } catch(error){
        response.status(404).send(error)
    }
}

export default getUserById