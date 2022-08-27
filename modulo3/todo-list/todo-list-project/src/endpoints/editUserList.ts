import { Response, Request } from "express";
import connection from "../connection";

const updateUser = async (name: string, nickname: string, id: any): Promise<any> => {
    await connection("TodoListUser")
      .update({
        name: name,
        nickname: nickname
      })
      .where("id", id);
  };

const editUserList = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      await updateUser(req.body.name, req.body.nickname, id);
      res.status(200).send({
        message: "Success",
      });
    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
}

export default editUserList