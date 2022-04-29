//26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

import {input, print} from "./io_utils.js"

function main(){

    //Entrada
    const dias = Number(input('Digite um número de dias '))

    //Processamento
    const e_semanas = Math.trunc(dias/7)
    const e_dias = dias%7

    print(` ${e_semanas} semana(s) e ${e_dias} dia(s)`)

} main()