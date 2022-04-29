//3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

import {input, print} from "./io_utils.js"

function main() {

    //Entradas
    const minutos = input('Digite um valor em minutos : ')

    //Processamento
    const e_horas = Math.trunc(minutos/60)
    const e_minutos = minutos%60

    //Saída
    print(` ${minutos} minutos em hh:mm é igual a: ${e_horas} horas e ${e_minutos} minutos`)

} 

main()