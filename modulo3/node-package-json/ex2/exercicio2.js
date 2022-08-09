calculo = process.argv[2]
var1 = Number(process.argv[3])
var2 = Number(process.argv[4])

switch(calculo){
	case "soma":
		calculo = var1 + var2
        console.log(" \033[0;34mO resultado da soma é:", calculo)
		break;
	case "mult":
		calculo = var1 * var2
        console.log("\033[0;33m O resultado da multiplicação é:", calculo)
		break;
    case "sub":
        calculo = var1 - var2
        console.log("\033[0;35m O resultado da subtração é:", calculo)
        break;
    case "div":
        calculo = var1 / var2
        console.log("\033[1;36m O resultado da divisão é:", calculo)
        break 
    default:
        console.log("\033[1;31m 404");
}