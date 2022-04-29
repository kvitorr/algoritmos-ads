//Leia tres números e escreva-os em ordem crescente 

import { input } from "./io_utils.js";

function main(){

    //Entradas
    const [number_1, number_2, number_3] = input("Digite tres números (ex.: 5 8 7): ").split(" ").map(Number)
    let ordenado

    //Processamento
    if(number_1 !== number_2 && number_1 !== number_3 && number_2 !== number_3){
        ordenado = ordem_crescente(number_1, number_2, number_3)

    } else {
        ordenado = igualdade_dos_numeros(number_1, number_2, number_3)
    }

    //Saídas
    console.log(`\nOrdem crescente: [${ordenado[0]}, ${ordenado[1]}, ${ordenado[2]}]\n`)


} 


//Funções

function ordem_crescente (n1, n2, n3){
    let maior, menor, meio
    
    if(n1 > n2 && n3 < n2){
        maior = n1
        meio = n2
        menor = n3

    } else if(n3 > n2 && n1 < n2){
        maior = n3
        meio = n2
        menor = n1

    } else if(n2 > n1 && n3 < n1){
        maior = n2
        meio = n1
        menor = n3

    } else if(n3 > n1 && n2 < n1){
        maior = n3
        meio = n1
        menor = n2
    
    } else if(n1 > n3 && n2 < n3){
        maior = n1
        meio = n3
        menor = n2

    } else if(n2 > n3 && n1 < n3){
        maior = n2
        meio = n3
        menor = n1
    }

    const ordenado = [menor, meio, maior]
    
    return ordenado
}

function igualdade_dos_numeros (n1, n2, n3){
    let menor, meio, maior
    let ordenado
    
    if(n1 == n2){
        if(n1 > n3){
            maior = n1
            meio = n2
            menor = n3

        } else {
            maior = n3
            meio = n2
            menor = n1
        }
    } else if (n1 == n3){
        if(n1 > n2){
            maior = n1
            meio = n3
            menor = n2

        } else {
            maior = n2
            meio = n3
            menor = n1
        }
    } else if (n2 == n3){
        if(n2 > n1){
            maior = n3
            meio = n2
            menor = n1 

        } else {
            maior = n1
            meio = n2
            menor = n3
        }
    }

    ordenado = [menor, meio, maior]

    return ordenado
}


main()

