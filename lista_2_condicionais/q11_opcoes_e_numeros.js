//Leia quatro números (opção, num1, num2, num3) e que escreva o valor de num1 se opção igual a 1, o valor de num2 se opção for igual a 2, e o valor de num3 se a opção for igual a 3. Os únicos valores possíveis para a variável opção são 1, 2 e 3.

import {input} from './io_utils.js'

function main(){

    //Entradas
    const [opcao, number_1, number_2, number_3] = input("Digite uma opção (1, 2 ou 3) e três números (ex.: 1 65 87 900):  ").split(" ").map(Number)

    //Processamento
    const resultado = seleciona_valor(opcao, number_1, number_2, number_3)

    //Saída
    console.log(`\tA opção selecionada foi: ${opcao}\n\tE resultado é: ${resultado}`)

} 

function seleciona_valor(op, n1, n2, n3){
    if(op === 1){
        return n1
    } else if (op === 2){
        return n2
    } else {
        return n3
    }
}

main()