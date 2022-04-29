//29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const meses = Number(input('Digite um número de meses '))

    //Processamento
    const e_anos = Math.trunc(meses/12)
    const e_meses = meses % 12

    //Saída
    console.log(`${e_anos} ano(s) ${e_meses} mes(es)`)

} main()