export enum NATION {
    BRAZILIAN = "BRAZIL",
    AMERICAN = "EUA"
}

export interface casinoUser {
    name: string,
    age: number,
    nacionality: NATION
}

export interface ResultUsers {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
export interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }