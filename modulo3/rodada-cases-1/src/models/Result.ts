export interface ResultDb {
    athlete_id: string,
    competition_id: string,
    value: number,
    unity: string
}

export class Result {
    constructor(
        private athlete_id: string,
        private competition_id: string,
        private value: number,
        private unity: string
    ) {}

    public getAthlete_id = () => {
        return this.athlete_id
    }

    public getCompetition_id = () => {
        return this.competition_id
    }

    public getValue = () => {
        return this.value
    }

    public getUnity = () => {
        return this.unity
    }

    public setAthlete_id = (newAthlete_id: string) => {
        this.athlete_id = newAthlete_id
    }

    public setCompetition_id = (newCompetition_id: string) => {
        this.competition_id = newCompetition_id
    }

    public setValue = (newValue: number) => {
        this.value = newValue
    }

    public setUnity = (newUnity: string) => {
        this.unity = newUnity
}

}
