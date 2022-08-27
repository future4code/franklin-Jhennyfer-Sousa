import { Response, Request } from "express";
import connection from "../connection";

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    const count = result[0][0].count;
    return count;
  };

const getCountActors = async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
}

export default getCountActors