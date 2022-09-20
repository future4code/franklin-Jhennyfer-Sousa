import UserDatabase from "../database/UserDatabase"
import { InGetUsersDBDTO, InGetUsersDTO, User, USER_ROLES } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export default class UserBusiness {
    constructor(
        protected idGenerator: IdGenerator,
        protected hashManager: HashManager,
        protected authenticator: Authenticator,
        protected userDatabase: UserDatabase
    ) {}
    public signup = async (input: any) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.includes('@')) {
            throw new Error("Email inválido")
        }

        const id = this.idGenerator.generate()


        const hashPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token =this.authenticator.generateToken(payload)

        const response = {
            token
        }

        return response
    }

    public login = async (input: any): Promise<any> => {

        const email = input.email
        const password = input.password

        if (!email || !password) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (typeof email !== "string" || email.length < 3) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (typeof password !== "string" || password.length < 3) {
            throw new Error("Parâmetro 'password' inválido")
        }

        const userDB = await this.userDatabase.getUserByEmail(email)

        if (!userDB) {
            throw new Error("E-mail não cadastrado")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())

        if (!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Login realizado com sucesso",
            token
        }

        return response
    }

    public deleteUser = async (input: any) => {
        const token = input.token
        const idToDelete = input.idToDelete
    
        const payload = this.authenticator.getTokenPayload(token)
    
        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }
    
        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Apenas admins podem deletar usuários")
        }
    
        if (payload.id === idToDelete) {
            throw new Error("Não é possível deletar a própria conta")
        }
    
        const userDB = await this.userDatabase.getUserById(idToDelete)
    
        if (!userDB) {
            throw new Error("Usuário a ser deletado não encontrado")
        }
    
        await this.userDatabase.deleteUser(idToDelete)
    
        const response = {
            message: "Usuário deletado com sucesso"
        }
    
        return response
    }

    public getAllUsers = async (input: InGetUsersDTO) => {
        const token = input.token
        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1

        const offset = limit* (page - 1)

        if(!token) {
            throw new Error("Missing token")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Invalid Token!")
        }

        const getUsersInputDB: InGetUsersDBDTO = {
            search,
            order,
            sort,
            limit,
            offset
        }
        
        const usersDB = await this.userDatabase.getAllUsers(getUsersInputDB)

        const users = usersDB.map(userDB => {
            const user = new User(
                userDB.id,
                userDB.name,
                userDB.email,
                userDB.password,
                userDB.role
            )

            const userResponse: any = {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail()
            }

            return userResponse
        })

        const response: any = {
            users
        }

        return response


    }
}