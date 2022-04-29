//27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const segundos = Number(input('Digite quantos segundos você quer analisar '))

    //Processamento
    const e_horas = Math.trunc(segundos/3600)
    let rest = segundos%3600
    const e_minutos = Math.trunc(rest/60)
    const e_segundos = rest%60


    //Saída
    print(`${e_horas} hora(s) ${e_minutos} minuto(s) ${e_segundos} segundo(s) `)

} main()