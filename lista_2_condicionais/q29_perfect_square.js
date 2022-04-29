//Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas formadas pelos seus dois primeiros e dois últimos dígitos

import {input} from "./io_utils.js"


function main(){

    //Entradas
    let numero = input('Digite um número com 4 dígitos para verificar se ele é um quadrado perfeito: ').split('').map(Number)
   
    const dois_primeiros = numero.slice(0, 2).join('')
    const dois_ultimos = numero.slice(-2).join('')
    const soma = Number(dois_primeiros) + Number(dois_ultimos)
    
    numero = numero.join('')
    numero = Number(numero)
    const numero_ao_quadrado = Math.sqrt(numero)

    //Processamento e Saídas
    if(numero_ao_quadrado === soma){
        console.log('\tÉ um quadrado perfeito')
    } else {
    console.log('\tNão é um quadrado perfeito')
    }
}
main()