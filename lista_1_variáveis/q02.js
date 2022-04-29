//2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

import {input, print} from "./io_utils.js"


function main(){

    //Entradas
    const horas = Number(input('Digite um valor em horas : '))
    const minutos = Number(input('Digite um valor em minutos : '))
    
    //Processamento    
    const min_total = horas * 60 + minutos
    
    //Saída
    print(`${horas} horas e ${minutos} minutos é igual a: ${min_total} minutos `)
    
}

main()


