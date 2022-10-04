export interface AthleteDto {
    id: string,
    name: string,
    age: number
}

export interface getAthleteDto {
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}

export interface dbGetAthleteDto {
    search: string,
    order: string,
    sort: string,
    limit: number,
    offset: number
}