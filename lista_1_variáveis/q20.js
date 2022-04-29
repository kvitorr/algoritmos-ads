//20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)


import {input, print} from "./io_utils.js"

function main() {

    //Entradas
    const celsius = Number(input('Digite uma temperatura em celsius: '))

    //Saída
    print(`${celsius} Celsius em Fareinheit é igual a ${(9 * celsius + 160)/5}`)

 } main()