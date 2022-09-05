import express, {Request, Response} from "express"
import cors from "cors"
import { listaTarefas } from "./database"


const app = express()

app.use(cors())
app.use(express.json())

//02
type tarefa = {id:'', idUsuario: '', titulo:'', concluido:''}

//01 exibe mensagem
app.get('/ping', (request:Request, response:Response) => {          
    response.status(200).send("Pong! 🏓")
})
app.get('/listaTarefas', (request:Request, response:Response) => {          
    response.status(200).send(listaTarefas)
})

//04 buscar tarefa por status
app.get('/tarefas/:status',(request:Request, response:Response)=>{
    let status: any = (request.params.status)
    const concluidoFilter = listaTarefas.filter((statusDb: any) => statusDb.concluido === status)

    if(status === "Sim") {
        response.status(200).send({concluidoFilter})
    }else if(status === "Não"){
        response.status(200).send({concluidoFilter})
    }else{
        response.status(400).send("Status não encontrado🤔")
    }
})

//5 cria nova tarefa
app.post('/novaTarefa',(request:Request, response:Response)=>{
    const {id, idUsuario, titulo, concluido}:tarefa = request.body

    const novaTarefa:tarefa = {
            id:id,
            idUsuario:idUsuario,
            titulo:titulo,
            concluido:concluido
} 

    listaTarefas.push(novaTarefa)
    response.status(200).send(listaTarefas)
})

/* //06 
app.put('/editarTarefa/:id',(request:Request, response:Response)=>{

})
//07
app.delete('/tarefa/:id',(request:Request, response:Response)=>{

}) */

//08 buscar tarefa por id
app.get('/listaTarefa/:idUsuario',(request:Request, response:Response)=>{
     let usuarioId: any = Number (request.params.idUsuario)
     const usuarioTarFilter = listaTarefas.filter((lista:any)=> lista.idUsuario === usuarioId)

     response.status(200).send({usuarioTarFilter})
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});