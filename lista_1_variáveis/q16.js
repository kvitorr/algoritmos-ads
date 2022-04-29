//16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

import {input, print} from "./io_utils.js"


function main() {
    
    //Entrada
    const lado = Number(input('Digite o lado do quadrado '))

    //Saída
    print(`Área do Quadrado: ${(lado * lado)}`)

} main()