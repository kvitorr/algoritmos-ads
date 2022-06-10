/**Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
*/


import {input} from "./io_utils.js"

function main() {

    //Entradas
    const A = Number(input('DIgite o primeiro valor: '))
    const B = Number(input('DIgite o segundo valor: '))
    const C = Number(input("Digite o terceiro valor: "))
    const pi = 3.14159

    //Cálculo das áreas
    const atri = (A*C)/2
    const circ = (pi*C**2)
    const atrap = ((A+B)*C)/2
    const aquad = B**2
    const aret = A*B 

    //Saída
    console.log(`TRIANGULO: ${atri.toFixed(3)}`)
    console.log(`CIRCULO: ${circ.toFixed(3)}`)
    console.log(`TRAPEZIO: ${atrap.toFixed(3)}`)
    console.log(`QUADRADO: ${aquad.toFixed(3)}`)
    console.log(`RETANGULO: ${aret.toFixed(3)}`)

}

main()