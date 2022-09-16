import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { routerA } from './router/routerUsers'


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/users', routerA)

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

