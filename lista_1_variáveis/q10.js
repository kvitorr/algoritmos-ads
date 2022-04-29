//10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

import {input, print} from "./io_utils.js"

function main() {
   
    //Entradas
    const a = parseInt(input('Digite um número a: '))
    const b = parseInt(input('Digite um número b: '))

    //Saída
    print(`Quociente: ${Math.trunc(a/b)}. Resto: ${a%b} `)
    
} main()