//4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

import {input, print} from "./io_utils.js"

function main() {

    //Entradas
    const dolar = Number(input('Digite o valor do Dólar: '))
    const dinheiro = Number(input('Digite um valor em Dólar que será transformado para Real: '))

    //Processamento
    const e_real = dolar * dinheiro

    //Saída
    print(` ${dinheiro} dólares em reais é igual a ${e_real} reais `)

}

main()