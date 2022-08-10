import express, {Request, Response} from 'express';
import cors from 'cors';
import { usuario, publicacoes } from './database'

const app = express()

app.use(cors())
app.use(express.json())

//01
app.get('/',(request:Request,response:Response)=>{
    response.status(201).send("Olá Jhennyfer :)")
})

//02
app.get('/exercicio2',(request:Request,response:Response)=>{
    const dados:any = [{id:'', nome:'', telefone:'', email:'', website:''}]
    response.status(201).send(dados)
})

//04
app.get('/usuarios',(request:Request,response:Response)=>{
    const buscaUsuario:any = usuario       
    response.status(201).send(buscaUsuario)
})

//7
app.get('/publicacoes',(request:Request,response:Response)=>{
    const verPublicacoes:any = publicacoes
    response.status(201).send(verPublicacoes)
})

//8
app.post('/publis/:id',(request:Request,response:Response)=>{
    const idUsuario = (request.params.id)
    const verPubli = publicacoes
    const buscarPubli = verPubli.filter((post:any)=>{
        return post.userId === idUsuario
    })
    response.status(201).send(buscarPubli)
})









app.listen(3003,()=>{
    console.log(`O servidor esta rodando na porta localhost:3003`)
})