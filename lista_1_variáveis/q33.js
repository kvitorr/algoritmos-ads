//33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const a = Number(input('Digite um número de tres dígitos '))

    //Processamento
    const c = Math.trunc(a/100) 
    let rest = a%100

    const d = Math.trunc(rest/10)
    rest = rest % 10 

    const u = rest

    //Definindo o número inverso
    const inverse = u.toString() + d.toString() + c.toString()

    //Cálculo
    const calculo = a + Number(inverse)

    //Saída
    print(`A soma entre ${a} - ${inverse} é ${calculo}`)

} main()