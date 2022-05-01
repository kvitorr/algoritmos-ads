//Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
//se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
//se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
//se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
//se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
//se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
//se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES

import {input} from './io_utils.js'

function main(){

    //Entradas
    const [A, B, C] = input('Digite 3 valores: ').split(' ').map(Number)

    //Processamento
    let [maior, meio, menor] = decrease_numbers(A, B, C)


    if(isTriangle(maior, meio, menor)){
        console.log('NAO FORMA TRIANGULO')
    } else if (isTriRetangle(maior, meio, menor)) {
        console.log('TRIANGULO RETANGULO')
    } else if (isObtuseangle(maior, meio, menor)){
        console.log('TRIANGULO OBTUSANGULO')
    } else if (isAcuteangle(maior, meio, menor)){
        console.log('TRIANGULO ACUTANGULO')
    }

    if(isEquilateral(maior, meio, menor)){
        console.log('TRIANGULO EQUILATERO')
    } else if (isIsosceles(maior, meio, menor)){
        console.log('TRIANGULO ISOSCELES')
    }
}


function decrease_numbers(A, B, C){

    if(A > B){
        if (B > C){
            return [A, B, C]

        } else if (C > B){
            return [A, C, B]

        } else {
            return [C, A, B]
        }

    } else { //B > A

        if (A > C){
            return [B, A, C]
        } else if (C > B){
            return [C, B, A]
        } else {
            return [B, C, A]
        }
    }
}


const isTriangle = (A, B, C) => {return (A >= B + C)}
const isTriRetangle = (A, B, C) => {return (A*A) === (B*B + C*C)}
const isObtuseangle = (A, B, C) => {return (A*A) > (B*B + C*C)}
const isAcuteangle = (A, B, C) => {return (A*A) < (B*B + C*C)}

const isEquilateral = (A, B, C) => {return (A === B && B === C)}
const isIsosceles = (A, B, C) => {return (A === B || B === C || C === A)}
main()


