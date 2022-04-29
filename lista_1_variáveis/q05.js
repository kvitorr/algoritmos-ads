//5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

import {input, print} from "./io_utils.js"

function main() {

    //Entradas
    const valor = Number(input('Digite um valor inteiro com 3 digitos '))

    //Processamento
    const c = Math.trunc(valor/100)
    let rest = valor%100

    const d = Math.trunc(rest/10) 
    rest = rest % 10 

    const u = rest

    //Saída
    print(` A soma da Unidade, Dezena e Centena é igual a  ${c + d + u}`)

} 
main()