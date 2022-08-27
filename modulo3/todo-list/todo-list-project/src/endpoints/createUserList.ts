import { Response, Request } from "express";
import connection from "../connection";

const createUser = async (
    name: string,
    nickname: string,
    email: string,
  ): Promise<void> => {
    await connection
      .insert({
        name: name,
        nickname: nickname,
        email: email
      })
      .into("TodoListUser");
  };

 const createUserList = async (req: Request, res: Response) => {
    try {
        await createUser(
        req.body.name,
        req.body.nickname,
        req.body.email
      );
      
      res.status(200).send('Sucess!');

    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
 }

 export default createUserList