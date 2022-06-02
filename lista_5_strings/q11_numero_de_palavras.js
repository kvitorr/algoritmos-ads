//Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado.


import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const frase = input('Frase: ')

    const calcula_quantidade_de_palavra = calcula_quantidade_de_palavras(frase)

    console.log(`${calcula_quantidade_de_palavra} palavras`)

}

function calcula_quantidade_de_palavras(string){

    const vetor_string = string.split(' ')

    let contador = 0

    for(let elemento of vetor_string){
        contador++
    }

   return contador

}


main()