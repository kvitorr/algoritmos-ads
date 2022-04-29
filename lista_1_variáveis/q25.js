//25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const metros = Number(input('Digite um valor em metros: '))

    //Processamento

    const km = Math.trunc(metros/1000)

    const m = metros%1000

    //Saída
    print(` ${km} km e ${m} m`)

} main()