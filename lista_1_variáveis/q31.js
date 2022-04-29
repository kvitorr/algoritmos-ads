//31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const f = Number(input('Digite um número binário de 4 digitos '))

    //Processamento
    const a = Math.trunc(f/1000)
    let rest = f%1000

    const b = Math.trunc(rest/100)
    rest = rest%100

    const c = Math.trunc(rest/10)
    rest = rest%10

    const d = rest

    const decimal = (a * (2**3) + b * (2**2) + c * (2**1) + d)

    //Saída 
    print(`na base decimal o número é: ${decimal}`)

} main()