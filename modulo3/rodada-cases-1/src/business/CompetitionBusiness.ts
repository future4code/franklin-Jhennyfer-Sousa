import { CompetitionDatabase } from "../database/CompetitionDatabase"
import { AthleteDto, dbGetAthleteDto, getAthleteDto } from "../dtos/athlete.dto"
import { CompetitionDto } from "../dtos/competition.dto"
import { ResultDto } from "../dtos/result.dto"
import { Athlete } from "../models/Athlete"
import { Competition, Status } from "../models/Competition"
import { Result } from "../models/Result"

export class CompetitionBusiness {
    constructor(
        protected competitionDatabase: CompetitionDatabase,
    ) { }

    public createCompetition = async (input: CompetitionDto) => {
        const id = input.id
        const modality = input.modality
        const status = input.status

        if (!id || !modality) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        const competition = new Competition(
            id,
            modality,
            Status.open
        )

        await this.competitionDatabase.createCompetition(competition)

        const response = {
            message: "Competição criada com sucesso",
        }

        return response
    }

    public createResult = async (input: ResultDto) => {
        const athlete_id = input.athlete_id
        const competition_id = input.competition_id
        const value = input.value
        const unity = input.unity

        if (!athlete_id || !competition_id || !value || !unity) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        const competitionDb = await this.competitionDatabase.getById(competition_id)

        if (competitionDb.status === "Closed") {
            throw new Error("A competição esta encerrada e não pode receber resultados")
        }

        const result = new Result(
            athlete_id,
            competition_id,
            value,
            unity
        )

        await this.competitionDatabase.createResult(result)

        const response = {
            message: "Resultado criado com sucesso",
        }

        return response
    }

    public finishCompetition = async (input: any) => {
        const {
            id,
            status
        } = input

        if (!status) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        const competitionDb = await this.competitionDatabase.getById(id)

        if (!competitionDb) {
            throw new Error("A competição a ser atualizada não existe")
        }

        const comp = new Competition(
            competitionDb.id,
            competitionDb.modality,
            competitionDb.status
        )

        status && comp.setStatus(status)

        await this.competitionDatabase.finishCompetition(comp)

        const response = {
            message: "Status da competição atualizado com sucesso"
        }

        return response
    }

    public getModalityResult = async (input: any) => {
        const id = input
        const modalityId = await this.competitionDatabase.getById(id)

        if (!modalityId) {
            throw new Error("Não existe competição cadastrada para o id informado")
        }

        const result = await this.competitionDatabase.getModalityResult(id)

        return result
    }

    public getAllAthletes = async (input: getAthleteDto) => {
        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit * (page - 1)

        const getAthleteInputDB: dbGetAthleteDto = {
            search,
            order,
            sort,
            limit,
            offset
        }

        const athleteDB: AthleteDto[] = await this.competitionDatabase.getAthleteProfile(getAthleteInputDB)

        const athletes = athleteDB.map(athDB => {
            const athProfile = new Athlete(
                athDB.id,
                athDB.name,
                athDB.age
            )

            const result: any = {
                id: athProfile.getId(),
                name: athProfile.getName(),
                age: athProfile.getAge()
            }

            return result
        })

        const response: any = {
            athletes
        }

        return response
    }
}