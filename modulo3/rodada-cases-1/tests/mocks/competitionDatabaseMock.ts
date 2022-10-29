import { BaseDatabase } from "../../src/database/BaseDatabase"
import { Athlete, AthleteDb } from "../../src/models/Athlete"
import { Competition } from "../../src/models/Competition"
import { Result } from "../../src/models/Result"


export class CompetitionDatabase extends BaseDatabase {
    public static athlete = "athlete"
    public static competition = "competition"
    public static result = "result"

    public createCompetition = async (competition: Competition) => { }

    public createAthlete = async (athlete: Athlete): Promise<void> => { }

    public createResult = async (result: Result): Promise<void> => { }

    public finishCompetition = async (competition: Competition) => {

    }

    public getById = async (id: string) => {
        switch (id) {
            case "01":
                return {
                    id: '01',
                    modality: '100m rasos',
                    status: 'Open'
                }
            default:
                return undefined
        }

    }

/*     public getModalityResult = async (input: any) => {
        switch (input) {
            case "100m":
                return {
                    modality: "",
                }
            default:
                return undefined
        }
    } */

    public getAthleteProfile = async (): Promise< AthleteDb[]> => {
       
                return [ 
                    {
                    "id": "02",
                    "name": "Frederick",
                    "age": 20
                  }
                ]
        }
    }
