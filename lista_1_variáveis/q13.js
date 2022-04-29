//13. Leia um valor em real (R$), calcule e escreva 70% deste valor.

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const valor = Number(input('Digite um valor em real: '))

    //Saída
    print(`70% desse valor equivale a: ${valor * 0.70}`)

} main()