import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";

export class RecipeController {
        constructor(
        protected recipeBusiness: RecipeBusiness,
    ){}

    public recipeCreate = async (req: Request, res: Response) => {
        try {
            const input: any = {
                title: req.body.title,
                description: req.body.description,
                preparation: req.body.preparation
            }

            const response = await this.recipeBusiness.recipeCreate(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getRecipeAll = async (req: Request, res: Response) => {
        try {
            const input: any= {
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.recipeBusiness.getRecipeAll(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getRecipeID = async (req: Request, res: Response) => {
        try {
            const input: any = {
                id:  req.params.id
            }

            const response = await this.recipeBusiness.getRecipeID(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}