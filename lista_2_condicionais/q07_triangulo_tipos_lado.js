// Leia 3 numeros (cada numero corresponde a um lado do triangulo), verifique e escreva se os 3 formam um triangulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0

import {input} from "./io_utils.js"

function main(){

    //Entradas
    const [lado_1, lado_2, lado_3] = input("Digite 3 lados de um triangulo(ex.: 140 50 98): ").split(" ").map(Number)

    //Processamento
    let verificacao = verifica_triangulo(lado_1, lado_2, lado_3)

    if(verificacao !== 0) {
        //Saída
        console.log(`\n ${verificacao}\n`)
    } else {
        //Saída
        verificacao = tipo_triangulo(lado_1, lado_2, lado_3)
        console.log(`\n ${verificacao}\n`)
    }    
} 

function verifica_triangulo(n1, n2, n3){
    const soma_lado_12 = n1 + n2
    const soma_lado_13 = n1 + n3
    const soma_lado_23 = n2 + n3

    if(((soma_lado_12 < n3) || (soma_lado_13 < n2) || (soma_lado_23 < n1)) || (n1 < 0 || n2 < 0 || n3 < 0)){
        return "\nNão é um triangulo\n"

    } else {
        return 0
    }
}

function tipo_triangulo(n1, n2, n3){
    if(n1 === n2 && n1 === n3 && n2 === n3){
        return "\nÉ um triangulo equilátero\n"

    } else if(n1 !== n2 && n1 !== n3 && n2 !== n3){
        return "\nÉ um triangulo escaleno\n"

    } else {
        return "\nÉ um triangulo isosceles\n"
    }
}


main()