//24. Leia um valor em m, calcule e escreva o equivalente em cm.

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const m = Number(input('Digite um valor em metros '))

    //Saída
    print(`${m} metros equivale a ${m * 100} centimetros`)

} main()