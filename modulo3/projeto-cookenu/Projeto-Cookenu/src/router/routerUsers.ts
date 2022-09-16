import { UserController } from "../controller/UserController"
import {Router} from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserDatabase } from "../database/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { HashManager } from "../services/HashManager"

export const routerA = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new Authenticator(),    
        new HashManager()
    )
)

routerA.post("/signup", userController.signup)
routerA.post("/login", userController.login)
routerA.get("/", userController.getUsers)
routerA.delete("/:id", userController.deleteUser)
routerA.put("/:id", userController.editUser)