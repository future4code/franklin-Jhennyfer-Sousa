export interface AthleteDb {
    id: string,
    name: string,
    age: number,
}

export class Athlete {
    constructor(
        private id: string,
        private name: string,
        private age: number
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getAge = () => {
        return this.age
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setAge = (newAge: number) => {
        this.age = newAge
    }

}
