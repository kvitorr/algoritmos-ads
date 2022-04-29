//Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

import fs from 'fs'

var input = fs.readFileSync('./inputs/q1035_teste_de_selecao1.txt', 'utf8');
var lines = input.split('\n');

function main(){

    //Entradas e variáveis
    const [A, B, C , D] = lines[0].split(' ')
    const sumCD = C + D 
    const sumAB = A + B 

    //Processamento e Saídas
    if(biggerThan(B, C) && biggerThan(D, A) && biggerThan(sumCD, sumAB)&& isPositive(C) && isPositive(D) && isEven(A)){
        console.log("Valores aceitos")
    } else {
        console.log("Valores nao aceitos")
    }
} 

function biggerThan(n1, n2){
    
    if (n1 > n2){
        return true
    } else {
        return false
    }
}   

function isPositive (n){
    if(n > 0){
        return true
    } else {
        return false
    }
}

function isEven(n){
    if(n % 2 === 0){
        return true
    } else {
        return false
    }
}
main()