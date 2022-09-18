import { BaseDatabase } from "../BaseDatabase"
import { RecipesDatabase } from "../RecipesDatabase"
import { UserRecipeDatabase } from "../UserRecipeDatabase"
import { users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error: any) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${UserRecipeDatabase.TABLE_USERS_RECIPE};
        DROP TABLE IF EXISTS ${RecipesDatabase.TABLE_RECIPES};

        CREATE TABLE IF NOT EXISTS ${UserRecipeDatabase.TABLE_USERS_RECIPE}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS ${RecipesDatabase.TABLE_RECIPES}(
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(500) DEFAULT "Nova receita!",
            preparation VARCHAR(800) NOT NULL,
            created DATE NOT NULL
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserRecipeDatabase.TABLE_USERS_RECIPE)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()