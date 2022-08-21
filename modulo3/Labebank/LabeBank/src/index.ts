import express, {Request, Response} from "express";
import cors from "cors";
import { clientDb } from "./database";

const app = express();

app.use(express.json());
app.use(cors());

type client = {
    id: number,
    name: string,
    cpf: number,
    birthDate: number,
    balance: number,
    extract: Array<extractData> 
}

type extractData = {
    id: number,
    value: number,
    date: string,
    description: string
}

//Criar conta (REQUISITO IDADE)
app.post('/client', (request: Request, response: Response) =>{
    const {id, name, cpf, birthDate} = request.body
    const extract: extractData[] = []
    const newClient: client = {id, name, cpf, birthDate, balance: 0, extract}

    const birth: Date = new Date(newClient.birthDate)
    const today: Date = new Date()
    const calcAge = today.getFullYear() - birth.getFullYear()


    if (calcAge >= 18) {
        clientDb.push(newClient)
    } else {
        response.status(400).send("O cliente precisa ser maior de idade para criar conta!")
    }

    response.status(200).send(clientDb)  
})

//Pegar informações dos clientes cadastrados
app.get('/client', (request: Request, response: Response) =>{
    response.status(200).send(clientDb)
})

//Pegar saldo do cliente (NOME E CPF)
app.get('/balance', (request: Request, response: Response) => {
    const {name, cpf} = request.body

    if (name && cpf ) {
        clientDb.find((finder:any) => { if (finder.name === name && finder.cpf === cpf) {
            response.status(200).send({Client: finder.name, Balance: finder.balance})
        } else {
            response.status(401).send({message: "Cliente não encontrado"})
        }
    })
    } else {
        response.status(500).send({message: "Você precisa informar o nome e o cpf"})
    }
})

// Adicionar SALDO AO CLIENTE  // corrigir valor somado como string
app.post('/balance', (request: Request, response: Response) => {
    const {name, cpf, balance} = request.body

    if (name && cpf) {
            clientDb.filter((finder: client) => { if  (finder.name === name && finder.cpf === cpf){
                clientDb[0].balance += Number(balance)
                response.status(200).send(clientDb)
            }})
        } else {
            response.status(401).send({message: "Cliente não encontrado"})
        }

})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});