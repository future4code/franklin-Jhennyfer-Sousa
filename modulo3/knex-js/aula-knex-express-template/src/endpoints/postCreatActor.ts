import { Response, Request } from "express";
import connection from "../connection";

const createActor = async (
    id: string,
    name: string,
    salary: number,
    birth_date: Date,
    gender: string,
    hometown: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: birth_date,
        gender: gender,
        hometown: hometown
      })
      .into("Actor");
  };

 const postCreatActor = async (req: Request, res: Response) => {
    try {
        await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.birth_date),
        req.body.gender,
        req.body.hometown
      );
  
      res.status(200).send({message:"Usuario criado com sucesso"});
    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
 }

 export default postCreatActor