//19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

import {input, print} from "./io_utils.js"

function main(){
    
    //Entradas
    const raio = Number(input('Digite o raio da esfera: '))

    //Saída
    print(`Volume da esfera: ${(4*3.14*(raio**3)/3)}`)

} main()