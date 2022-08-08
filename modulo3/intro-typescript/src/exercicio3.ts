function checaAnoBissexto(ano: number) {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    
    if ((cond1 || cond2) == true) {
        return "O ano é bissexto"
    } else {
        return "O ano não é bissexto😐"
    }
 }
 console.log(checaAnoBissexto(2022))
