// Escreva uma sub-rotina de nome vertical, que escreva um texto de até 20 caracteres na vertical. Ex.: vertical (10,'Algoritmos'); escreverá 'Algoritmos' na coluna 10.

import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const palavra = string_menor_igual_20_caracteres()

    diagonal(palavra)

} main()


function string_menor_igual_20_caracteres(){

    let string = input('Palavra: ')

    let tamanho_string = string.length


    while(tamanho_string > 20){
        
        console.log('ERRO: Digite uma palavra com até 20 caracteres')
        string = input('Palavra: ')

        tamanho_string = string.length
    }

    return string

}

function diagonal(palavra){

    let linha = ""
    let coluna = ""

    for(let j = 0; j < palavra.length; j++){

        
        linha += coluna + palavra[j] + "\n"

        coluna += "   "


    }


    console.log(linha)
}
