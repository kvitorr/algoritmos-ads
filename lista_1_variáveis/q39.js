//

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const a = Math.trunc(input('Digite o primeiro número: '))
    const b = Math.trunc(input('Digite o segundo número: '))
    const c = Math.trunc(input('Digite o terceiro número: '))

    //Processamento
    const R = (Number(a)+ Number(b))**2
    const S = (Number(b)+ Number(c))**2

    //Saida
    print(`o valor da expressão é: ${(R + S)/2}`)

 } main()