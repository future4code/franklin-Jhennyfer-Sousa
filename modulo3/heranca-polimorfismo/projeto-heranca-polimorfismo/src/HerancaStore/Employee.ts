import { User } from "./User";

export class Employee extends User {
    private wageBase: number = 0;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        wageBase: number 
    ) {
        super(id, email, name, password);
        this.wageBase = wageBase;
    }
}