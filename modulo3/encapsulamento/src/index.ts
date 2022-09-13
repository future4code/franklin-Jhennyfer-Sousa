class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getNameAge():void{
        return console.log(this.name,this.age)
    }
  }

  class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
    }

    public getDate():void{
        return console.log(this.date)
       } 
    
  }

const transacao = new Transaction("30/08/22", 80, "Transacao realizada")

transacao.getDate()
  
//1-b
const andreza = new UserAccount("21345643", "Andreza", 27)

andreza.getNameAge()

