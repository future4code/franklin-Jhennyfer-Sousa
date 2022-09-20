import { dbGetUsersDto, IUserDB, User } from "../model/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserRecipeDatabase extends BaseDatabase {
    public static TABLE_USERS_RECIPE = "UserRecipe"

    public findByEmail = async (email: string) => {
        const usersDB: IUserDB[] = await BaseDatabase
            .connection(UserRecipeDatabase.TABLE_USERS_RECIPE)
            .select()
            .where({ email })

        return usersDB[0]
    }

    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase
            .connection(UserRecipeDatabase.TABLE_USERS_RECIPE)
            .insert(userDB)
    }

    public getUsers = async (input: dbGetUsersDto) => {
        const search = input.search
        const order = input.order
        const sort = input.sort
        const limit = input.limit
        const offset = input.offset

        const usersDB: IUserDB[] = await BaseDatabase
            .connection(UserRecipeDatabase.TABLE_USERS_RECIPE)
            .select()
            .where("name", "LIKE", `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)
        
        return usersDB
    }

    public findById = async (id: string) => {
        const usersDB: IUserDB[] = await BaseDatabase
            .connection(UserRecipeDatabase.TABLE_USERS_RECIPE)
            .select()
            .where({ id })

        return usersDB[0]
    }

    public deleteUser = async (id: string) => {
        await BaseDatabase
            .connection(UserRecipeDatabase.TABLE_USERS_RECIPE)
            .delete()
            .where({ id })
    }

    public editUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }
        
        await BaseDatabase
            .connection(UserRecipeDatabase.TABLE_USERS_RECIPE)
            .update(userDB)
            .where({ id: userDB.id })
    }
}