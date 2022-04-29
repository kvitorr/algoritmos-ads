// 30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

import {input, print} from "./io_utils.js"


function main() {

    //Entradas
    const minutos = Number(input('Digite um número inteiro em minutos '))

    //Processamento
    const e_dias = Math.trunc(minutos/1440)
    let rest = minutos%1440

    const e_horas = Math.trunc(rest/60)
    const e_minutos = rest %60

    //Saída
    console.log(`${e_dias} dia(s) ${e_horas} hora(s) ${e_minutos} minuto(s)`)

} main()