function checaTriangulo(ladoA:number, ladoB:number, ladoC:number) {
    if (ladoA !== ladoB && ladoB !== ladoC) {
      return "O triângulo é Escaleno";
    } else if (ladoB === ladoB && ladoB === ladoC) {
      return "O triângulo é Equilátero";
    } else {
      return "O triândulo é Isósceles";
    }
  }

console.log(checaTriangulo(1, 2, 3))