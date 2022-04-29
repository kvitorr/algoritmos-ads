//Realize arredondamentos de números utilizando a regra usual da matemática: 
    //se a parte fracionária for maior ou igual a 0.5, o número é arredondado para o inteiro imediatamente superior, caso contrário, é arredondado para o interio imediatamente inferior


import {input} from './io_utils.js'

function main(){

    //Entradas
    const numero = Number(input('Digite um número: '))
    let numero_arredondado = 0

    //Processamento
    if(numero > 0) {
        numero_arredondado = arredondamento_numero_positivo(numero)

    } else if (numero < 0) {
        numero_arredondado = arredondamento_numero_negativo(numero)
    } else {
        numero_arredondado = numero
    }

    console.log(`\tO número ${numero} arredondado é igual a ${numero_arredondado}`)

} 

function arredondamento_numero_positivo(n1) {
    const decimal = n1 - Math.trunc(n1)

    if(decimal >= 0.5){
        return n1 - decimal + 1
    } else {
        return n1 - decimal
    }
}

function arredondamento_numero_negativo(n1) {
    const decimal = Math.abs(n1) - Math.abs(Math.trunc(n1))

    if(decimal >= 0.5){
        return n1 + decimal - 1 // 1.51
    } else {
        return n1 + decimal
    }
}

main()