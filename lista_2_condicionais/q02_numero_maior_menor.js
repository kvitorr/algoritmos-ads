// Leia 2 números, verifique e escreva o menor e o maior entre os números lidos

import {input} from "./io_utils.js"

function main(){

    //Entradas
    const [number_1, number_2] = input("Digite dois números para a avaliação (ex.: 3 5): ").split(" ").map(Number)

    //Processamento
    const resultado = maior_menor(number_1, number_2)

    //Saídas
     console.log(`${resultado}`)
   
} 

function maior_menor(n1, n2){
    if(n1 === n2){
        return "Os números são iguais"
    } else if (n1 < n2) {
        return `Maior: ${n2}\nMenor: ${n1}`
    } else if (n2 < n1) {
        return `Maior: ${n1}\nMenor: ${n2}`
    }
} 

main()