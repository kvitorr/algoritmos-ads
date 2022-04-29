//11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

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

    //Saída
    print(`Número ordem normal: ${a}  Número ordem inversa: ${u.toString() + d.toString() + c.toString()}`)

} main()