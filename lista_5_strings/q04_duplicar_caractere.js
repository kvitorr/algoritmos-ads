//Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.

import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const frase = input('Frase: ')

    const frase_com_caracteres_duplicados = duplicar_caracteres_string(frase)

    console.log(frase_com_caracteres_duplicados)

} 

function duplicar_caracteres_string(string){

    const tamanho_string = string.length
    let frase_com_caracteres_duplicados = ""
    let caractere


    for(let index_caractere = 0; index_caractere < tamanho_string; index_caractere += 1){

        caractere = string[index_caractere]
        frase_com_caracteres_duplicados = frase_com_caracteres_duplicados + caractere + caractere

    }


    return frase_com_caracteres_duplicados

}


main()