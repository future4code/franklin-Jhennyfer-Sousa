export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface loginDto {
    email: string,
    password: string
}

export interface signupDto {
    name: string,
    email: string,
    password: string
}

export interface getUsersDto {
    token: string | undefined,
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface dbGetUsersDto {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number 
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }

    public getRole = () => {
        return this.role
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }

    public setRole = (newRole: USER_ROLES) => {
        this.role = newRole
    }

}
