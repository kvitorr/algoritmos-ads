//Leia 1 número inteiro e escreva se este número é par ou impar

import {input} from './io_utils.js'

function main(){
    //Entradas
    const numero = input('Digite um número: ')
    
    //Processamento
    if(eh_par(numero)){
        console.log('\tO número é par')
    } else {
        console.log("\tO número é ímpar")
    } 
} 

let eh_par = (a) => {return (a % 2) === 0};
main()