import { CompetitionBusiness } from "../../src/business/CompetitionBusiness"
import { BaseDatabase } from "../../src/database/BaseDatabase"
import { CompetitionDatabase } from "../../src/database/CompetitionDatabase"
import { CompetitionDto } from "../../src/dtos/competition.dto"
import { ResultDto } from "../../src/dtos/result.dto"
import { CompetitionDb, Status } from "../../src/models/Competition"

describe("", () => {
    const competitionBusiness = new CompetitionBusiness(new CompetitionDatabase)

    afterAll(async () => {

        await BaseDatabase.connection.raw(
            `DELETE FROM result WHERE competition_id=70`,
        )
        await BaseDatabase.connection.raw(
            `DELETE FROM competition WHERE id=70`
        )
        BaseDatabase.connection.destroy()
    })

    test("Testando endpoint creatCompetition", async () => {
        const newCompetiton: CompetitionDto = {
            id: '70',
            modality: '100m',
            status: Status.open
        }
        const competition = await competitionBusiness.createCompetition(newCompetiton)
        expect(competition.message).toBe("Competição criada com sucesso")

    })

    test("Testando endpoint creatCompetition sem passar o valor da modalidade", async () => {
        expect.assertions(1)
        try {
            const newCompetiton: CompetitionDto = {
                id: '70',
                modality: '',
                status: Status.progress
            }
            const competition = await competitionBusiness.createCompetition(newCompetiton)

        } catch (error) {
            expect(error.message).toEqual("Um ou mais parâmetros faltando")
        }
    })

    test("Testando endpoint creatResult", async () => {
        const newResult: ResultDto = {
            athlete_id: '01',
            competition_id: '70',
            value: 70.8,
            unity: 'm',
        }
        const result = await competitionBusiness.createResult(newResult)
        expect(result.message).toBe("Resultado criado com sucesso")
    })

    test("Testando endpoint creatResult sem passar um ou mais parametro", async () => {
        expect.assertions(1)
        try {
            const newResult: ResultDto = {
                athlete_id: '01',
                competition_id: '',
                value: 70.8,
                unity: 'm',
            }
            const result = await competitionBusiness.createResult(newResult)

        } catch (error) {
            expect(error.message).toEqual("Um ou mais parâmetros faltando")
        }
    })

    test("Testando endpoint finishCompetition", async () => {
        const id = '01'

        const competitionDb = await new CompetitionDatabase().getById(id as string)
        const newComp: CompetitionDb = {
            id,
            modality: competitionDb.id,
            status: Status.closed
        }
        const comp = await competitionBusiness.finishCompetition(newComp)
        expect(comp.message).toBe("Status da competição atualizado com sucesso")
    })

    /* test("Testando endpoint finishCompetition sem passar um ou mais parametro", async () => {
       expect.assertions(1)
       try {
           const id = '02'
           const status = ''

           const competitionDb = await new CompetitionDatabase().getById(id as string)
           const newComp: CompetitionDb = {
               id: id,
               modality: competitionDb.id,
               status: status
           }
           const comp = await competitionBusiness.finishCompetition(newComp)

       } catch (error) {
           expect(error.message).toEqual("Um ou mais parâmetros faltando")
       } 
   }) */

    test("Testando endpoint getModalityResult", async () => {

    })

    test("Testando endpoint getAllAthletes", async () => {

    })
})
