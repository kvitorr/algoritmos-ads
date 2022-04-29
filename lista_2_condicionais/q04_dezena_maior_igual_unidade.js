// Leia 1 número de 2 dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade

import { input } from "./io_utils.js"

function main(){

    //Entradas
    const numero = input("Digite um número de 2 dígitos (ex.: 15) ")
    const verificacao1 = verificacao_condicao_dois_digitos(numero)
    const verificacao2 = igual_ou_diferente(numero[0], numero[1])
    
    //Processamento e saídas
    if (verificacao1 === 0){
        console.log("\nO número digitado é inválido\n")

    } else {
        console.log(`\nO algarismo da dezena e da unidade são ${verificacao2}`)
    }
} 

// Funções 
function verificacao_condicao_dois_digitos(n1){
    if((n1 < 10 && n1 >= 0) || (n1 > (-10) && n1 <= 0) || (n1 >= 100) || (n1 <= (-100))){
        return 0
    }
}

function igual_ou_diferente(n1, n2){
    if (n1 === n2){
        return "iguais\n"
    } else {
        return "diferentes\n"
    }
}

//Chamada da função main
main()