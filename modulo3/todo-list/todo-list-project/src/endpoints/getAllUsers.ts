import { Response, Request } from "express";
import connection from "../connection";

const allusers = async (): Promise<any> => {
    const result = await connection(`TodoListUser`)
    return result
  }

const getAllUsers = async (req: Request, res: Response) => {
    try {
       const result = await allusers()
        res.status(200).send(result)
      } catch (error) {
            console.log(error)
        res.status(500).send("Unexpected error")
      }
}

export default getAllUsers