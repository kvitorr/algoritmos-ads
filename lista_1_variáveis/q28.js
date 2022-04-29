//28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.

import {input, print} from "./io_utils.js"

function main () {

    //Entrada
    const horas = Number(input('Digite quantos horas você quer analisar '))

    //Processamento
    const e_semanas = Math.trunc(horas/168)
    let rest = horas%168

    const e_dias = Math.trunc(rest/24)

    const e_horas = rest%24

    //Saída
    print(`${e_semanas} semana(s) ${e_dias} dia(s) ${e_horas} hora(s) `)

} main()