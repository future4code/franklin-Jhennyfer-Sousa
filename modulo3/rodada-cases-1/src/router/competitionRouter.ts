import { CompetitionController } from "../controller/CompetitionController"
import {Router} from "express"
import { CompetitionDatabase } from "../database/CompetitionDatabase"
import { CompetitionBusiness } from "../business/CompetitionBusiness"

export const competitionRouter = Router()

const competitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDatabase(),
    )
)

competitionRouter.get("/athletes", competitionController.getAthletes) 
competitionRouter.post("/create/competition", competitionController.createCompetition)
competitionRouter.post("/create/result", competitionController.createResult)
competitionRouter.get("/result/:id", competitionController.getModalityResult) 
competitionRouter.put("/:id", competitionController.finishCompetition)
