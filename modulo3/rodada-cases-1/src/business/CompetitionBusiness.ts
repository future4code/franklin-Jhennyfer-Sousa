import { CompetitionDatabase } from "../database/CompetitionDatabase"
import { CompetitionDto } from "../dtos/competition.dto"
import { ResultDto } from "../dtos/result.dto"
import { Competition, Status } from "../models/Competition"
import { Result } from "../models/Result"
import { IdGenerator } from "../services/IdGenerator"

//user
export class CompetitionBusiness {
    endCompetition(input: CompetitionDto) {
        throw new Error("Method not implemented.")
    }
    constructor(
        protected competitionDatabase: CompetitionDatabase,
        protected idGenerator: IdGenerator,
    ){}

//signup, criar usuario
    public createCompetition = async (input: CompetitionDto) => {
        const id = input.id
        const modality = input.modality
        const status = input.status

        if (!id || !modality) {
            throw new Error("Um ou mais parâmetros faltando")
        }


        const competition = new Competition (
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
            //token,
            id,
            status
        } = input

        if (!status) {
            throw new Error("Parâmetros faltando")
        }

        const competitionDb = await this.competitionDatabase.getById(id)

        if (!competitionDb) {
            throw new Error("A competição a ser atualizada não existe")
        }

        const comp = new Competition (
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

}