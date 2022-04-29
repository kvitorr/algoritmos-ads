// Leia 3 números, verifique e escreva o maior entre os números lidos

import {input} from "./io_utils.js"

function main(){

    //Entradas
    const [number_1, number_2, number_3] = input("Digite três números (ex.: 3 4 5): ").split(" ").map(Number)

    //Processamento
    const maior = maior_numero(number_1, number_2, number_3)

    //Saída
    if (maior === true){
        console.log('Os números são iguais')

    } else {
        console.log(`O maior número dentre ${number_1}, ${number_2} e ${number_3} é ${maior}\n`)
    }

} 

function maior_numero(n1, n2, n3) {

    if (n1 === n2 && n1 === n3 && n2 === n3){
       return true

    } else if (n1 > n2 && n1 > n3){
        return n1

    } else if (n2 > n1 && n2 > n3){
        return n2

    } else if (n3 > n1 && n3 > n2){
        return n3
    }
}


main()