//Leia dois valores e uma das seguintes operações a serem executadas codificadas da seguinte forma: 

import { input } from "./io_utils.js"

//1- Adição 2-Subtração 3-Multiplicação e 4-Divisão

//Calcule e escreva o resultado dessa operação sobre os dois valores lidos

function main(){

    //Entradas
    const [number_1, number_2, opcao] = input('Digite, separando por um espaço, dois valores e uma opção (1- Adição 2-Subtração 3-Multiplicação 4-Divisão): ').split(' ').map(Number)
    let resultado = 0

    //Processamento
    if(opcao === 1) {
        resultado = adicao(number_1, number_2)
        console.log(`A opção escolhida foi --Adição--. ${number_1} + ${number_2} = ${resultado}`)

    } else if (opcao === 2){
        resultado = subtracao(number_1, number_2)
        console.log(`A opção escolhida foi --Subtração--. ${number_1} - ${number_2} = ${resultado}`)

    } else if (opcao === 3){
        resultado = multiplicacao(number_1, number_2)
        console.log(`A opção escolhida foi --Multiplicação--. ${number_1} * ${number_2} = ${resultado}`)

    } else {
        resultado = divisao(number_1, number_2)
        console.log(`A opção escolhida foi --Divisão--. ${number_1} / ${number_2} = ${resultado}`)
    }
} 

//Funções
const adicao = (n1, n2) => {return n1 + n2}

const subtracao = (n1, n2) => {return n1 - n2}

const multiplicacao = (n1, n2) => {return n1 * n2}

const divisao = (n1, n2) => {return n1 / n2}

main()

