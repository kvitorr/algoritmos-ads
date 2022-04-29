// 22. Leia um valor em km, calcule e escreva o equivalente em m.

import {input, print} from "./io_utils.js"


function main() {

    //Entrada
    const km = Number(input('Digite um valor em quilometros '))

    //Saída
    print(`${km} quilômetros equivale a ${km * 1000} metros`)

} main()