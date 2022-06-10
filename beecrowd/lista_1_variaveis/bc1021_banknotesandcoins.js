import {input} from "./io_utils.js";

function main() {

    //Entrada
    const integer_value = Number(input('enter an integer value to be parsed: '))

    //Processamento NOTAS
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

    const coin_1 = Math.trunc(remainder_2/1)
    const remainder_c1 = remainder_2%1


    //Processamento MOEDAS


    const coin_50 = Math.trunc((remainder_c1/0.5))
    const remainder_c50 = remainder_c1%0.5

    const coin_25 = Math.trunc(remainder_c50/0.25)
    const remainder_c25 = remainder_c50%0.25

    const coin_10 = Math.trunc(remainder_c25/0.10)
    const remainder_c10 = remainder_c25%0.10

    const coin_05 = Math.trunc(remainder_c10/0.05)
    const remainder_c05 = remainder_c10%0.05

    const coin_01 = Math.trunc(remainder_c05/0.01)



    //Saída
    console.log('NOTAS:')
    console.log(`${notes_100} nota(s) de R$ 100.00`)
    console.log(`${notes_50} nota(s) de R$ 50.00`)
    console.log(`${notes_20} nota(s) de R$ 20.00`)
    console.log(`${notes_10} nota(s) de R$ 10.00`)
    console.log(`${notes_5} nota(s) de R$ 5.00`)
    console.log(`${notes_2} nota(s) de R$ 2.00`)
    console.log('MOEDAS:')
    console.log(`${coin_1} moeda(s) de R$ 1.00`)
    console.log(`${coin_50} moeda(s) de R$ 0.50`)
    console.log(`${coin_25} moeda(s) de R$ 0.25`)
    console.log(`${coin_10} moeda(s) de R$ 0.10`)
    console.log(`${coin_05} moeda(s) de R$ 0.05`)
    console.log(`${coin_01} moeda(s) de R$ 0.01`)
}

main()