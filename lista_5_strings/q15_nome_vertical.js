// Escreva uma sub-rotina de nome vertical, que escreva um texto de até 20 caracteres na vertical. Ex.: vertical (10,'Algoritmos'); escreverá 'Algoritmos' na coluna 10.

import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const palavra = string_menor_igual_20_caracteres()
    const qtd_de_colunas = input('Quantidade de colunas: ')

    vertical(qtd_de_colunas, palavra)




} main()


function string_menor_igual_20_caracteres(){

    let string = input('Palavra: ')

    const tamanho_string = string.length


    while(tamanho_string > 20){
        console.log('ERRO: Digite uma palavra com até 20 caracteres')
        string = input('Palavra: ')

        tamanho_string = string.length

    }

    return string

}

function vertical(qtd_de_colunas, palavra){

    let colunas = ""

    for(let j = 1; j < qtd_de_colunas; j++){

        colunas += " "

    }

    let linha = ""

    for(let i = 0; i < palavra.length; i++){

        linha = colunas + palavra[i]
        console.log(linha)
        linha = ""

    }

}
