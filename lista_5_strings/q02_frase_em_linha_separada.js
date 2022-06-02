//Leia uma frase e mostre cada palavra da frase em uma linha separada.

import prompt from 'prompt-sync'
const input = prompt()




function main(){

    const frase_vetor = input('Frase: ').split(' ')

    exibe_cada_palavra_verticalmente(frase_vetor)

} 

function exibe_cada_palavra_verticalmente(frase_vetor){
    
    const tamanho_vetor = frase_vetor.length
    let palavra
    
    for(let index_caractere = 0; index_caractere < tamanho_vetor; index_caractere += 1){

        palavra = frase_vetor[index_caractere]
        console.log(palavra)

    }
} main()