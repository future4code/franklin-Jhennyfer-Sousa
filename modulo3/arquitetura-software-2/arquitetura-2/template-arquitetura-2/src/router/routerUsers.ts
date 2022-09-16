import { UserController } from "../controller/UserController"
import {Router} from "express"

export const routerA = Router()

const userController = new UserController()

routerA.post("/signup", userController.signup)
routerA.post("/login", userController.login)
routerA.get("/", userController.getUsers)
routerA.delete("/:id", userController.deleteUser)
routerA.put("/:id", userController.editUser)