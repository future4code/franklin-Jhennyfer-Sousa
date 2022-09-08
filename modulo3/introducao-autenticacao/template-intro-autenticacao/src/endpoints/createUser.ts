import { Request, Response } from "express";
import connection from "../connection";
import { getUserByEmail } from "../data/getUserByEmail";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { email, password } = req.body

    if (!email || email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!password || password.length < 6) {
      throw new Error("Invalid password");
    }

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

      const user = await getUserByEmail(email)

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IdGenerator().generateId()

      const newUser: user = { id, email, password }

      await connection('User')
         .insert(newUser)

      const payload: authenticationData = {
         id: newUser.id
      }

      const token = new Authenticator().generateToken(payload)

      res.status(201).send({ token })

   } catch (error: any) {
      console.log(error)
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}