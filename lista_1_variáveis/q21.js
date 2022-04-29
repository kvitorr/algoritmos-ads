//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import {input, print} from "./io_utils.js"

function main() {

    //Entradas
    const f = Number(input('Digite uma temperatura em F: '))

    //Saída
    print(`${f} Fareinheits em Celsius é igual a ${(5 * f - 160)/9}`)

} main()