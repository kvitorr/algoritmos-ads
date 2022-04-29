import {input} from "./io_utils.js";

function main() {

    //Entrada
    const integer_value = Number(input('enter an integer value to be parsed corresponding to a person\'s age (in days): '))

    //Processamento
    
    const years = Math.trunc(integer_value/365)
    const remainder_years = integer_value%365

    const mounth = Math.trunc(remainder_years/30)
    const days = remainder_years%30

    //Saída
    console.log(`${years} ano(s)\n${mounth} mes(es)\n${days} dia(s)`)
}

main()