//Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

import fs from 'fs'

var input = fs.readFileSync('./inputs/q1038_lanche.txt', 'utf8');
var lines = input.split('\n');


function main(){
    
    //Entradas
    const [codigo, quantidade] = lines[1].split(' ').map(Number)

    //Processamento
    const preco = quantidade * codigo_to_valor(codigo)

    //Saídas
    console.log(`Total: R$ ${preco.toFixed(2)}`)
} 


function codigo_to_valor(codigo){
    if(codigo === 1){
        return 4
    } else if (codigo === 2){
        return 4.5
    } else if (codigo === 3){
        return 5
    } else if (codigo === 4){
        return 2
    } else {
        return 1.5
    }
}

main()