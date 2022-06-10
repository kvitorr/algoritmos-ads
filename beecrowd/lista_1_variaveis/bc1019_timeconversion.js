import {input} from "./io_utils.js";

function main() {

    //Entrada
    const integer_value = Number(input('enter an integer value to be parsed: '))

    //Processamento
    //Math.trunc retornará apenas a parte inteira de integer_value/3600
    //Remainder_hour armazenará o resto da divisão entre integer_value/3600 que são os segundos restantes que será utilizado no cálculo dos minutos e segundos
    const hour = Math.trunc(integer_value/3600)
    const remainder_hour = integer_value%3600

    const minutes = Math.trunc(remainder_hour/60)
    const seconds = remainder_hour%60

    //Saída
    console.log(`${hour}:${minutes}:${seconds}`)
}

main()