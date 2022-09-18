import { RecipesDatabase } from "../database/RecipesDatabase"
import { Recipes } from "../model/Recipe"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class RecipeBusiness {
    constructor(
        protected recipeDatabase: RecipesDatabase,
        protected idGenerator: IdGenerator,
        protected authenticator: Authenticator,
        protected hashManager: HashManager    
    ){}
    
    public recipeCreate = async (input: any) => {
        const title = input.title
        const description = input.description
        const preparation = input.prepare
        const created = input.created


        if (!title || !description || !preparation) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (typeof description !== "string" || description.length < 20) {
            throw new Error("Parâmetro 'description' inválido")
        }

        const id = this.idGenerator.generate()

        const recipe = new Recipes(
            id,
            title,
            description,
            preparation,
            created
        )

        await this.recipeDatabase.creatRecipes(recipe)

        const response = {
            message: "Receita criada com sucesso",
        }

        return response
    }

    

    public getRecipeAll = async (input: any) => {
        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)
        
        const getRecipeInputDB: any = {
            search,
            order,
            sort,
            limit,
            offset
        }

        const recipeDB = await this.recipeDatabase.getRecipeAll(getRecipeInputDB)

        const allRecipe = recipeDB.map(recipeDB => {
            const recipe = new Recipes(
                recipeDB.id,
                recipeDB.title,
                recipeDB.description,
                recipeDB.preparation,
                recipeDB.created
            )

            const recipeResponse: any = {
                id: recipe.getId(),
                title: recipe.getTitle(),
                description: recipe.getDescription()
            }

            return recipeResponse
        })

        const response: any = {
            allRecipe
        }

        return response
    }

        public getRecipeID = async (input: any) => {

            const id = input.id
          
            const recipe = await this.recipeDatabase.findById(id)

            if (!id) {
                throw new Error("O usuário não existe!")
            }
    
                const Response = {
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    preparation: recipe.preparation
                }
    
                return Response
            } 
}