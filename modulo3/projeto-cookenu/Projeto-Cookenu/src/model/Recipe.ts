export interface IRecipesDB {
    id: string,
    title: string,
    description: string,
    preparation: string,
    created: Date 
}

export interface getRecipesDto {
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface dbGetRecipesDto {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number 
}

export class Recipes {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private preparation: string,
        private created: Date
    ) {}

    public getId = () => {
        return this.id
    }

    public getTitle = () => {
        return this.title
    }

    public getDescription = () => {
        return this.description
    }

    public getPreparation = () => {
        return this.preparation
    }

    public getCreated = () => {
        return this.created
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setTitle = (newTitle: string) => {
        this.title = newTitle
    }

    public setDescription = (newDescription: string) => {
        this.description = newDescription
    }

    public setPreparation = (newPreparation: string) => {
        this.preparation = newPreparation
    }

    public setCreated = (newCreated: Date) => {
        this.created = newCreated
    }

}
