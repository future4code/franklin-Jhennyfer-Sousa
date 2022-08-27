import { Response, Request } from "express";
import connection from "../connection";

const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
  };

const putUpdateActor = async (req: Request, res: Response) => {
    try {
      await updateActor(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
}

export default putUpdateActor