import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { getAthleteDto } from "../dtos/athlete.dto";
import { CompetitionDto } from "../dtos/competition.dto"
import { ResultDto } from "../dtos/result.dto";

export class CompetitionController {
    CompetitionBusiness: any;
    constructor(
        protected competitionBusiness: CompetitionBusiness,
    ) { }

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

    public getModalityResult = async (req: Request, res: Response) => {
        try {
            const input: any = req.params.id as string

            const response = await this.competitionBusiness.getModalityResult(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getAthletes = async (req: Request, res: Response) => {
        try {
            const input: getAthleteDto = {
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const response = await this.competitionBusiness.getAllAthletes(input)

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