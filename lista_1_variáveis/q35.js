// 35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.

import {input, print} from "./io_utils.js"

function main() {
    
    //Entrada
    const f = Number(input('Digite um número de 4 digitos '))
    
    //Processamento
    const a = Math.trunc(f/1000)
    let rest = f%1000

    const b = Math.trunc(rest/100)
    rest = rest%100

    const c = Math.trunc(rest/10)
    rest = rest%10

    const d = rest

    //Saída
    print(`A soma dos elementos que compõe o número é: ${a + b + c + d}`)

} main()