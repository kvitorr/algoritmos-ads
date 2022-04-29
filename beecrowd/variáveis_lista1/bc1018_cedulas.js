import {input} from "./io_utils.js";

function main() {

    //Entrada
    const integer_value = Number(input('enter an integer value to be parsed: '))

    //Processamento
    //Math.trunc retorna a parte inteira de um número. Portanto, notes_xxx receberá a quantidade de notas que ele vai ter que receber de acordo com os valores.
    //Remainder_xxx está recebendo o restante do dinheiro que falta ser dividido pelas outras cédulas.
    const notes_100 = Math.trunc(integer_value/100)
    const remainder_100 = integer_value%100

    const notes_50 = Math.trunc(remainder_100/50)
    const remainder_50 = remainder_100%50

    const notes_20 = Math.trunc(remainder_50/20)
    const remainder_20 = remainder_50%20

    const notes_10 = Math.trunc(remainder_20/10)
    const remainder_10 = remainder_20%10

    const notes_5 = Math.trunc(remainder_10/5)
    const remainder_5 = remainder_10%5

    const notes_2 = Math.trunc(remainder_5/2)
    const remainder_2 = remainder_5%2

    const notes_1 = Math.trunc(remainder_2/1)
    const remainder_1 = remainder_2%1

    //Saída
    console.log(`${integer_value}`)
    console.log(`${notes_100} nota(s) de R$ 100,00`)
    console.log(`${notes_50} nota(s) de R$ 50,00`)
    console.log(`${notes_20} nota(s) de R$ 20,00`)
    console.log(`${notes_10} nota(s) de R$ 10,00`)
    console.log(`${notes_5} nota(s) de R$ 5,00`)
    console.log(`${notes_2} nota(s) de R$ 2,00`)
    console.log(`${notes_1} nota(s) de R$ 1,00`)
}

main()