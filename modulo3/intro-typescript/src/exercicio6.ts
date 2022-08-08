function checafuncao(n1: number, n2: number) {
    var soma: number = n1 + n2
    var sub: number = n1 - n2
    var mult: number = n1 * n2
    let maiorNumero: number 

    if (n1 > n2){
        maiorNumero = n1
    } else {
        maiorNumero = n2
    }
    return `A soma dos números é ${soma} .\n A subtração dos números é ${sub} .\n A multiplicação dos números é ${mult} .\n E o maior número deles é ${maiorNumero}` 
} 

console.log(checafuncao(6, 4))