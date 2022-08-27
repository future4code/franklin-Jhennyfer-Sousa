import { Response, Request } from "express";
import connection from "../connection";

const createTask = async (
    title: string,
    description: string,
    status: string,
    limit_date: Date,
    creator_user_id: number
  ): Promise<void> => {
    await connection
      .insert({
        title: title,
        description: description,
        status: status,
        limit_date: limit_date,
        creator_user_id: creator_user_id
      })
      .into("TodoListTask");
  };

 const createTaskList = async (req: Request, res: Response) => {
    try {
        await createTask(
        req.body.title,
        req.body.description,
        req.body.status,
        req.body.limit_date,
        req.body.creator_user_id
      );
      
      res.status(200).send({message: 'Tarefa criada com sucesso!'});

    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
 }

 export default createTaskList