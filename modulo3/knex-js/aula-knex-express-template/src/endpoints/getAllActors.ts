import { Response, Request } from "express";
import connection from "../connection";

//FUNÇÃO BUSCAR O ACTOR PELO NOME
const allActors = async (): Promise<any> => {
    const result = await connection(`Actor`)
    return result
  }

const getAllActors = async (req: Request, res: Response) => {
    try {
       const result = await allActors()
        res.status(200).send(result)
      } catch (error) {
            console.log(error)
        res.status(500).send("Unexpected error")
      }
}

export default getAllActors