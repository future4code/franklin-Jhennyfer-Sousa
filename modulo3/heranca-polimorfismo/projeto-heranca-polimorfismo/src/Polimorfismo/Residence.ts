import { Place } from "./Place";

export class Residence extends Place {
    constructor(
      protected dwellersQuantity: number,
      // Refere-se ao número de moradores da casa 
      cep: string
    ) {
      super(cep);
    }

    public getDwellersQuantitu(): number {
      return this.dwellersQuantity
    }
  }