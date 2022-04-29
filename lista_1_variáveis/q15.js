//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import {input, print} from "./io_utils.js"

function main() {
    
    //Entradas
    const base = Number(input('Digite a base do triângulo: '))
    const altura = Number(input('Digite a altura do triângulo '))

    //Saída
    print(`Área do Triangulo: ${(base * altura)/2}`)

} main()