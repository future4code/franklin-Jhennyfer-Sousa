import { CpuInfo } from "os"
import { Athlete, AthleteDb } from "../models/Athlete"
import { CompetitionDb, Competition } from "../models/Competition"
import { Result, ResultDb } from "../models/Result"
import { BaseDatabase } from "./BaseDatabase"

//UserDatabase/TABLE_USERS
export class CompetitionDatabase extends BaseDatabase {
    public static athlete = "athlete"
    public static competition = "competition"
    public static result = "result"

    public createCompetition = async (competition: Competition) => {
        const competitionDb: CompetitionDb = {
            id: competition.getId(),
            modality: competition.getModality(),
            status: competition.getStatus()
        }

        await BaseDatabase
            .connection(CompetitionDatabase.competition)
            .insert(competitionDb)
    }

    public createAthlete = async (athlete: Athlete) => {
        const athleteDb: AthleteDb = {
            id: athlete.getId(),
            name: athlete.getName(),
            age: athlete.getAge()
        }

        await BaseDatabase
            .connection(CompetitionDatabase.athlete)
            .insert(athleteDb)
    }

    public createResult = async (result: Result) => {
        const resultDb: ResultDb = {
            athlete_id: result.getAthlete_id(),
            competition_id: result.getCompetition_id(),
            value: result.getValue(),
            unity: result.getUnity()
        }

        await BaseDatabase
            .connection(CompetitionDatabase.result)
            .insert(resultDb)
    }

    public finishCompetition = async (competition: Competition) => {
        const competitionDb: CompetitionDb = {
            id: competition.getId(),
            modality: competition.getModality(),
            status: competition.getStatus(),
        }
        
        await BaseDatabase
            .connection(CompetitionDatabase.competition)
            .update(competitionDb)
            .where({ id: competitionDb.id })
    }

    public getById = async (id: string) => {
        const result: CompetitionDb[] = await BaseDatabase
            .connection(CompetitionDatabase.competition)
            .select()
            .where({ id })

        return result[0]
    }

}
