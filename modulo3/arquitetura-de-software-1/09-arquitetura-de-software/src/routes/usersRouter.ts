import { Router } from "express";
import UserController from '../controller/UserController'
import UserBusiness from '../business/UserBusiness'
import UserDatabase from '../database/UserDatabase'
import { IdGenerator } from '../services/IdGenerator'
import { HashManager } from '../services/HashManager'
import { Authenticator } from '../services/Authenticator'

export const useRouter = Router()


const userController = new UserController(
    new UserBusiness(
        new IdGenerator(),
        new HashManager(),
        new Authenticator(),
        new UserDatabase()
    )
)

useRouter.post("/signup", userController.signup)
useRouter.post("/login", userController.login)
useRouter.get("/all", userController.getAllUsers)
useRouter.delete("/:id", userController.deleteUser)