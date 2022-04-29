// 37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.


import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const idade = input('Digite sua idade em dias: ')


    //Processamento
    const e_anos = Math.trunc(idade/365)
    let rest = idade % 365

    const e_meses = Math.trunc(rest/30)
    const e_dias = rest %30

    //Saída
    console.log(` A idade equivale a ${e_anos} ano(s) ${e_meses} mes(es) ${e_dias} dia(s)`)

} main()