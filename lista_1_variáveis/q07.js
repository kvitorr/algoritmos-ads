// 7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

import {input, print} from "./io_utils.js"

function main() {

    //Entradas
    const a = Number(input('Digite um número a: '))
    const b = Number(input('Digite um número b: '))
    const c = Number(input('Digite um número c: '))

    //Processamento
    const SOMA = a + b
    const DIFERENCA = Math.abs(b -c)


    print(`A soma entre os dois primeiros é ${SOMA} e a diferença dos dois ultimos é ${DIFERENCA} `)

}

main()