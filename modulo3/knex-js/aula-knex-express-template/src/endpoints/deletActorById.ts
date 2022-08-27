import { Response, Request } from "express";
import connection from "../connection";

const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  }; 

const deleteActorById = async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
}

export default deleteActorById