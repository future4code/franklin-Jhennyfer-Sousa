import { IRecipesDB, Recipes } from "../model/Recipe"
import { BaseDatabase } from "./BaseDatabase"

export class RecipesDatabase extends BaseDatabase {
 
    public static TABLE_RECIPES = "Recipes"


    public creatRecipes = async (recipes: Recipes) => {
        const recipesDB: IRecipesDB = {
            id: recipes.getId(),
            title: recipes.getTitle(),
            description: recipes.getDescription(),
            preparation: recipes.getPreparation(),
            created: recipes.getCreated()
        }

        await BaseDatabase
            .connection(RecipesDatabase.TABLE_RECIPES)
            .insert(recipesDB)
    }

    public getRecipeAll = async (input: any) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const recipeDB: any[] = await BaseDatabase
            .connection(RecipesDatabase.TABLE_RECIPES)
            .select()
            .where("title", "LIKE", `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)
        
        return recipeDB
    }

    public findById = async (id: string) => {
        const usersDB: IRecipesDB[] = await BaseDatabase
            .connection(RecipesDatabase.TABLE_RECIPES)
            .select()
            .where({ id })

        return usersDB[0]
    }


}