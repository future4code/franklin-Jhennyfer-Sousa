import {Customer} from './HerancaStore/Customer';
import { Employee } from './HerancaStore/Employee';
import { Seller } from './HerancaStore/Seller';
import {User} from './HerancaStore/User'
import { Client } from './Polimorfismo/Client';
import { ClientManager } from './Polimorfismo/ClientManager';
import { Commerce } from './Polimorfismo/Commerce';
import { CommercialClient } from './Polimorfismo/CommercialClient';
import { IndustrialClient } from './Polimorfismo/IndustrialClient';
import { Place } from './Polimorfismo/Place';
import { ResidentialClient } from './Polimorfismo/ResidentialClient';

const userA = new User('001', 'jhenny@hotmail.com', 'Jhennyfer Sousa', '123')
console.log(userA)

const customerA =  new Customer('002', 'andreza@hotmail.com', 'Andreza', '@123', '908762513')
console.log(customerA.introduceYourself())

const employee = new Employee('001', 'joao@gmail.com', 'Joao', "@ks12", 1300)
console.log(employee)

const seller = new Seller('001','maria@gmail.com', 'Maria', '@980', 2)
console.log(seller)

const client: Client = {
    name: "Lane",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }
  console.log(client.calculateBill())

 /*  const place = new Place('68140000')
  console.log(place)  */

  const managerClient = new ClientManager()

  const clientCommerce = new CommercialClient('Celia', 3, 26, '289357205', 5, '3986598326')
  console.log(clientCommerce)

  const clientIndustrial = new IndustrialClient('Andy', 1, 15, '46', 3, '98610397')
  console.log(clientIndustrial)

  const clientResidential = new ResidentialClient('Bred', 2, 20, '097217301037', 4, '14093735')
  console.log(clientResidential)

 console.log(managerClient.getClientsQuantity())
 console.log(managerClient.registerClient(clientCommerce))
 console.log(managerClient.getClientsQuantity())
 console.log(managerClient.registerClient(clientResidential))