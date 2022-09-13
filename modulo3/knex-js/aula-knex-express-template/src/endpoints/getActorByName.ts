import { Response, Request } from "express";
import connection from "../connection";

//FUNÇÃO BUSCAR O ACTOR PELO NOME
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0][0]
  }

const getActorByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name
    
        console.log(await searchActor(name))
    
        res.status(200).send(await searchActor(name))
      } catch (error) {
            console.log(error)
        res.status(500).send("Unexpected error")
      }
}

export default getActorByName