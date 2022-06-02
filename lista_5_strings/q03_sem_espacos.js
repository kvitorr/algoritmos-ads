//Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const frase = input('Frase: ')

    const frase_sem_espacos = retirar_espacos_de_frases(frase)

    console.log(frase_sem_espacos)

} 

function retirar_espacos_de_frases(frase){

    const vetor_com_palavras = frase.split(' ')

    let frase_sem_espacos = ""

    for(let palavras of vetor_com_palavras){

        frase_sem_espacos += palavras
    }

    return frase_sem_espacos

}


main()