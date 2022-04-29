// 23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const g = Number(input('Digite um valor em quilogramas '))

    //Saída
    print(`${g} quilogramas equivale a ${g * 1000} gramas`)
} main()