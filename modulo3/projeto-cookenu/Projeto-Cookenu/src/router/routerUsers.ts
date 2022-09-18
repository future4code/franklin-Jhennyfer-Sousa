import { UserController } from "../controller/UserController"
import { Router } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserRecipeDatabase } from "../database/UserRecipeDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { HashManager } from "../services/HashManager"

export const routerA = Router()

const userController = new UserController(
    new UserBusiness(
    new UserRecipeDatabase(),
    new IdGenerator(),
    new Authenticator(),
    new HashManager()
    )
)

routerA.get("/", userController.getUsers)
routerA.get("/profile", userController.getUserProfile)
routerA.get("/:id", userController.getUserByID)
routerA.post("/signup", userController.signup)
routerA.post("/login", userController.login)
routerA.delete("/:id", userController.deleteUser)
routerA.put("/:id", userController.editUser)
