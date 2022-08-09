function comparaDoisNumeros(n1: number, n2: number) {
    let maiorNumero: number
    let menorNumero: number
  
    if (n1 > n2) {
      maiorNumero = n1;
      menorNumero = n2;
    } else {
      maiorNumero = n2;
      menorNumero = n1;
    }
  
    const diferenca: number = maiorNumero - menorNumero;
  
    return ` O maior numero é ${maiorNumero}, o menor numero é ${menorNumero} .\n O valor da diferença entre o ${n1} e o ${n2} é ${diferenca} ,`
  }
  console.log(comparaDoisNumeros(67, 90))