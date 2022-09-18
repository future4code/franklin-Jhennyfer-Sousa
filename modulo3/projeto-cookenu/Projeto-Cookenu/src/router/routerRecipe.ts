import {Router} from "express"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { HashManager } from "../services/HashManager"
import { RecipeController } from "../controller/RecipeController"
import { RecipeBusiness } from "../business/RecipeBusiness"
import { RecipesDatabase } from "../database/RecipesDatabase"

export const routerRecipe = Router()

const recipeController = new RecipeController(
    new RecipeBusiness(
    new RecipesDatabase(),
    new IdGenerator(),
    new Authenticator(),    
    new HashManager()
    )
)

routerRecipe.post("/recipe", recipeController.recipeCreate)
routerRecipe.get("/all", recipeController.getRecipeAll)
routerRecipe.get("/:id", recipeController.getRecipeID)


