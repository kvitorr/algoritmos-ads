//34. Leia 3 números, calcule e escreva a média dos números.

import {input, print} from "./io_utils.js"

function main() {

    //Entradas
    const a = Number(input('Digite o primeiro número: '))
    const b = Number(input('Digite o segundo número: '))
    const c = Number(input('Digite o terceiro número: '))

    //Saída
    print(` A média dos tres números é: ${(a + b + c)/3} `)

} main()