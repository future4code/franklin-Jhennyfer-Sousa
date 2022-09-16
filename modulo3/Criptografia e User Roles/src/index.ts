import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
import { hashManager } from "./services/hashManager"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.get('/user/profile', getProfile)

/* //instancia da classe hash manager
const hashM = new hashManager()

//funçao que ira simular senhas e tentativas
//essa função ira usar metodos hash e compere da instancia hashM
const test = async () =>{
const senha: string = '7454a'
const senhaCorreta: string = '7454a'
const senhaIncorreta: string = '7450'

const hash = await hashM.hash(senha)
console.log(hash)
const resultadoIncorreto = await hashM.compare(senhaIncorreta, hash)
console.log(resultadoIncorreto)
}

test() */