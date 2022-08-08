function checaRenovacaoRG(anoA: number, anoN: number, anoE: number) {
 
    const idade: number = anoA - anoN
    const tempoCarteira: number = anoA - anoE
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    if ((cond1 || cond2 || cond3) === true){
        return "Sua identidade precisa ser renovada!😉"
    } else{
        return "Você está com sua identidade em dias!🤩"
    }
 }
  console.log(checaRenovacaoRG(2022, 1994, 2014))