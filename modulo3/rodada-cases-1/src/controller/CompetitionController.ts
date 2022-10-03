import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionDto } from "../dtos/competition.dto"
import { ResultDto } from "../dtos/result.dto";

//user
export class CompetitionController {
        constructor(
        protected competitionBusiness: CompetitionBusiness,
    ){}
    //criar, signup/ model da requisiçao
    public createCompetition = async (req: Request, res: Response) => {
        try {
            const input: CompetitionDto = {
                id: req.body.id,
                modality: req.body.modality,
                status: req.body.status
            }

            const response = await this.competitionBusiness.createCompetition(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public createResult = async (req: Request, res: Response) => {
        try {
            const input: ResultDto = {
                athlete_id: req.body.athlete_id,
                competition_id: req.body.competition_id,
                value: req.body.value,
                unity: req.body.unity
            }

            const response = await this.competitionBusiness.createResult(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public finishCompetition = async (req: Request, res: Response) => {
        try {
            const input: any = {
                /* token: req.headers.authorization, */
                id: req.params.id,
                status: req.body.status
            }

            const response = await this.competitionBusiness.finishCompetition(input)

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