//Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

import {input} from './io_utils.js'

function main(){

    //Entradas
    const [number_1, number_2] = input('Digite dois números para verificar se são múltiplos: ').split(' ').map(Number)

    //Processamento
    const [maior, menor] = order_numbers(number_1, number_2)

    if(isMultiple(maior, menor)) {
        //Saídas
        console.log('Sao Multiplos')
    } else {
        //Saídas
        console.log('Nao sao Multiplos')
    }
} 

const isMultiple = (n1, n2) => {return (n1 % n2) === 0} 

function order_numbers(n1, n2){
    if(n1 > n2){
        return [n1, n2]
    } else {
        return [n2, n1]
    }
}

main()