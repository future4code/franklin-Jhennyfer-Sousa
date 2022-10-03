import { CompetitionController } from "../controller/CompetitionController"
import {Router} from "express"
import { CompetitionDatabase } from "../database/CompetitionDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { CompetitionBusiness } from "../business/CompetitionBusiness"

export const competitionRouter = Router()

const competitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDatabase(),
        new IdGenerator()
    )
)

competitionRouter.post("/create/competition", competitionController.createCompetition)
competitionRouter.post("/create/result", competitionController.createResult)
competitionRouter.put("/:id", competitionController.finishCompetition)
/* competitionRouter.get("/", competitionController.getUsers)
competitionRouter.put("/:id", competitionController.editUser) */