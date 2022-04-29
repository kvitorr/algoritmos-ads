//36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const idade = input('Digite sua idade no formato: anos meses dias (números inteiros): ')

    const idade_e = idade.split(" ")

    //Processamento
    const anos = Number(idade_e[0])
    const meses = Number(idade_e[1])
    const dias = Number(idade_e[2])

    //Cálculo

    const e_dias = anos * 365 + meses * 30 + dias

    //Saída
    console.log(` A idade equivale a ${e_dias} dias`)

} main()