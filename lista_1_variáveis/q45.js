//45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição ótima.


import {input} from "./io_utils.js";

function main() {

    //Entrada
    const integer_value = Number(input('enter an integer value to be parsed: '))

    //Processamento NOTAS
    //Math.trunc retorna a parte inteira de um número. Portanto, notes_xxx receberá a quantidade de notas que ele vai ter que receber de acordo com os valores.
    //Remainder_xxx está recebendo o restante do dinheiro que falta ser dividido pelas outras cédulas.

    // Considere que o caixa possua notas de 100, 50, 20, 10, 5, 2 e 1 real
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

    //Saída
    console.log('NOTAS:')
    console.log(`${notes_100} nota(s) de R$ 100.00`)
    console.log(`${notes_50} nota(s) de R$ 50.00`)
    console.log(`${notes_20} nota(s) de R$ 20.00`)
    console.log(`${notes_10} nota(s) de R$ 10.00`)
    console.log(`${notes_5} nota(s) de R$ 5.00`)
    console.log(`${notes_2} nota(s) de R$ 2.00`)
    console.log(`${notes_1} nota(s) de R$ 1.00`)
   
} main()