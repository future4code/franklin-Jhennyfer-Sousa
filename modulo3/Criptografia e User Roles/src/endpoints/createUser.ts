import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { Generate } from "../services/Generate";
import { hashManager } from "../services/hashManager";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body
   
      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const userDB = new UserDatabase()
      const user = await userDB.getByEmail(email)

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const generate = new Generate()
      const id: string = generate.generateId()

      const hashM = new hashManager()
      const hash = await hashM.hash(password)

      const newUser: user = { id, name, nickname, email, password: hash }

      await userDB.create(newUser)

      const authenticator = new Authenticator()
      const token = authenticator.generateToken({id})

      res.status(201).send({ newUser, token })

   } catch (error: any) {
      console.log(error)
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}