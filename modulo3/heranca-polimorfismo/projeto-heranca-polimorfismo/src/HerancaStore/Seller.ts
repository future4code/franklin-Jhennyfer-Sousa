import { User } from "./User";

export class Seller extends User{
    private salesNumber: number = 0;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        salesNumber: number
    ){
        super(id, email, name, password);
        this.salesNumber = salesNumber;
    }
}