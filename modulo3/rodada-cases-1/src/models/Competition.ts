export enum Status {
   progress = "In progress",
   closed = "Closed",
   open = "Open"
}

export interface CompetitionDb {
    id: string,
    modality: string,
    status: Status,
}

export interface loginDto {
    email: string,
    password: string
}

export class Competition {
    constructor(
        private id: string,
        private modality: string,
        private status: Status
    ) {}

    public getId = () => {
        return this.id
    }

    public getModality = () => {
        return this.modality
    }

    public getStatus = () => {
        return this.status
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setModality = (newModality: string) => {
        this.modality = newModality
    }

    public setStatus = (newStatus: Status) => {
        this.status = newStatus
    }

}