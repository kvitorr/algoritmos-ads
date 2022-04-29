//18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

import {input, print} from "./io_utils.js"


function main() {
    
    //Entrada
    const raio = Number(input('Digite o raio da circunferencia: '))

    //Saída
    print(`Comprimento da circunferencia: ${raio * Math.PI * 2}`)
} main()