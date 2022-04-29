//Leia 3 números, verifique e escreva quantos números iguais existem entre os números

import {input} from './io_utils.js'

function main(){

    //Entradas
    const [number_1, number_2, number_3] = input("Digite três números (ex.: 5 7 99) ").split(" ").map(Number)

    //Processamento
    const quant_iguais = cont_numeros_iguais(number_1, number_2, number_3)

    //Saída
    if (quant_iguais === 0) {
        console.log("Os três números são diferentes")
    } else {console.log(`${quant_iguais} números iguais`)}
    
} 

function cont_numeros_iguais (n1, n2, n3) {
    if (n1 !== n2 && n1 !== n3 && n2 !== n3){
        return 0
    } else if (n1 === n2 && n1 === n3 && n2 === n3){
        return 3
    } else if (n1 === n2 || n1 === n3 || n2 === n3){
        return 2
    }
        
}

main()