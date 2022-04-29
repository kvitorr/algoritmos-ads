//8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

import {input, print} from "./io_utils.js"

function main(){

    //Entradas
    const a = Number(input('Digite um número a: '))
    const b = Number(input('Digite um número b: '))

    //Processamento
    const calculo = (a+b)/(a-b)
    
    //Saída
    print(`A divisão da soma pela subtração dos números lidos é igual a ${calculo} `)
}

main()