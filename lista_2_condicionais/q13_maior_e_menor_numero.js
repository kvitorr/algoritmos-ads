//Leia 5 números inteiros e escreva o maior e o menor deles. Considere que todos os valores são diferentes

import { input } from "./io_utils.js"

function main(){

    //Entradas
    const [number_1, number_2, number_3, number_4, number_5] = input('Digite 5 números diferentes (ex.: 5 4 8 7 9): ').split(" ").map(Number)

    //Processamento
    if(todos_diferentes(number_1, number_2, number_3, number_4, number_5)){
       
        const maior_numero = o_maior(number_1, number_2, number_3, number_4, number_5)

        const menor_numero = o_menor(number_1, number_2, number_3, number_4, number_5)

        //Saídas
        console.log(`\tMaior número: ${maior_numero}\n\tMenor número: ${menor_numero}`)


    } else {
        console.log("\tEntradas inválidas, digite 5 números diferentes.")
    }

} 
const todos_diferentes = (n1, n2, n3, n4, n5) => {return (n1 !== n2 && n1 !== n3 &&  n1 !== n4 && n1!== n5 && n2 !== n3 && n2 !== n4 && n2 !== n5 && n3 !== n4 && n3 !== n5 && n4 !== n5)}

function o_maior(n1, n2, n3, n4, n5){
    if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5){
        return n1
    } else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5){
        return n2
    } else if (n3 > n2 && n3 > n1 && n3 > n4 && n3 > n5){
        return n3
    } else if (n4 > n2 && n4 > n3 && n4 > n1 && n4 > n5){
        return n4
    } else {
        return n5
    }
}

function o_menor(n1, n2, n3, n4, n5){
    if (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5){
        return n1
    } else if (n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5){
        return n2
    } else if(n3 < n2 && n3 < n1 && n3 < n4 && n3 < n5){
        return n3
    } else if(n4 < n2 && n4 < n3 && n4 < n1 && n4 < n5){
        return n4
    } else {
        return n5
    }
}

main()