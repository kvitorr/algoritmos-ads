//Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica:

import { input } from "./io_utils.js";

//1. se dividirmos o número em dois números de dois digitos, um composto pela dezena e pela unidade, e o outro pelo milhar e pela centena
//2. se somarmos estes dois novos números gerando um terceiro, o quadrado deste terceiro número é exatamente o número original de quatro dígitos

//exemplo: 2025 - 20 e 25 - 25 + 20 = 45 - 45 * 45 = 2025

function main(){
    const numero_array = input('Digite um número de 4 dígitos: ').split('').map(Number)
    const numero_inteiro = Number(numero_array.join(''))

    const dezena_unidade = Number(numero_array.slice(-2).join(''))
    const milhar_centena = Number(numero_array.slice(0, 2).join(''))

    const soma = dezena_unidade + milhar_centena
    const soma_quadrado = soma * soma 

    if(soma_quadrado === numero_inteiro){
        console.log(`${numero_inteiro} -> ${milhar_centena} + ${dezena_unidade} = ${soma} -> ${soma} * ${soma} = ${soma_quadrado}`)
    } else {
        console.log(`O procedimento não funcionou para o número ${numero_inteiro}`)
    }

} 

main()

