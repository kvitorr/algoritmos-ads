//17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

import {input, print} from "./io_utils.js"

function main(){
    
    //Entradas
    const base = Number(input('Digite a base do retângulo: '))
    const altura = Number(input('Digite a altura do retângulo '))

    //Saída
    print(`Área do Retangulo: ${(base * altura)}`)

} main()