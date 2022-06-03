// Escreva uma sub-rotina de nome substr, que extraia uma sub-cadeia de uma string. Ex.: substr(texto, 10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.

import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const palavra = input('Frase: ')
    const qtd_de_caracteres = Number(input('Quantidade de Caracteres: '))
    const index_inicio = Number(input('Index do caractere de inicio: '))

    const palavra_extraida = substr(palavra, index_inicio, qtd_de_caracteres)

    console.log(palavra_extraida)

} 

function substr(string, inicio, qtd_de_caracteres){

    let substring = ""
    let caractere

    for(let index_caractere = inicio; index_caractere < qtd_de_caracteres; index_caractere += 1){
        
        caractere = string[index_caractere]
        substring += caractere
    }
return substring
}





main()

