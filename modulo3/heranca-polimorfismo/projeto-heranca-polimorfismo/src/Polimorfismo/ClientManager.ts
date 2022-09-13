import { Client } from "./Client";

export class ClientManager  {
    private clients: Client[] = [];  
 
    public getClientsQuantity(): number {
      return this.clients.length;
    }

    public registerClient(Client: Client){
        return this.clients.push(Client)
    }
  }