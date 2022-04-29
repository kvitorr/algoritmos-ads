//14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import {input, print} from "./io_utils.js"

function main() {

    //Entradas
    const n1 = Number(input('Digite a primeira nota: '))
    const p1 = Number(input('Digite o primeiro peso '))

    const n2 = Number(input('Digite a segunda nota: '))
    const p2 = Number(input('Digite o segundo peso '))

    const n3 = Number(input('Digite a terceira nota: '))
    const p3 = Number(input('Digite o terceiro peso '))

    //Processamento
    const media_ponderada = (n1*p1 + n2*p2 + n3*p3)/(p1 + p2 + p3)

    //Saída
    print(`Média poderada: ${media_ponderada.toFixed(2)}`)

} main()