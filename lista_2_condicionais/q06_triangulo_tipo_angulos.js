// Leia 3 numeros (cada um correspondendo a um angulo interno do triangulo), verifique e escreva se os 3 números formamm um triangulo (a soma dos angulos internos é igual a 180º). Se formam verifique se formam um triangulo acutangulo (3 angulos <90), retangulo (1 angulo = 90) ou obtusangulo (1 angulo >90). Não existe angulo com tamanho 0º

import {input} from './io_utils.js'

function main(){

    //Entradas
    const [angulo_1, angulo_2, angulo_3] = input("Digite tres angulos para ser verificado (ex.: 100 10 70): ").split(" ").map(Number)

    //Processamento e saídas
    let verificacao = verifica_triangulo(angulo_1, angulo_2, angulo_3)

    if ((verificacao === "\nNão é um triangulo\n") || (verificacao === "\nNão existe triangulo com angulo 0º\n") || (verificacao === "\nNão existe triangulo com angulo negativo\n")){
        console.log(`${verificacao}`)
    } else {
        verificacao = tipo_triangulo(angulo_1, angulo_2, angulo_3)
        console.log(`${verificacao}`)
    }

} 

function verifica_triangulo(n1, n2, n3){
    if (n1 === 0 || n2 === 0 || n3 === 0){
        return "\nNão existe triangulo com angulo 0º\n"

    } else if (n1 < 0 || n2 < 0 || n3 < 0){
        return "\nNão existe triangulo com angulo negativo\n"

    } else if ((n1 + n2 + n3) !== 180){
        return "\nNão é um triangulo\n"
    }
}


function tipo_triangulo(n1, n2, n3){
    if (n1 < 90 && n2 < 90 && n3 < 90){
        return "\nO triangulo é acutangulo\n"

    } else if ((n1 === 90 && n2 < 90 && n3 < 90) || (n2 === 90 && n1 < 90 && n3 < 90) || (n3 === 90 && n1 < 90 && n2 < 90)){
        return "\nO triangulo é retangulo\n"

    } else{
        return "\nO triangulo é obtusangulo\n"
    }
}


main()