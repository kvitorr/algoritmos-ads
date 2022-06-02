//Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as consoantes deverão ser substituídas pelo caractere #.


import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const frase = input('Frase: ')

    const frase_invertida = inverte_string(frase)

    const frase_criptografada = troca_consoantes_por_caractere(frase_invertida, '#')

    console.log(frase_criptografada)

}

function inverte_string(string){
    let string_invertida = ""
    let caractere

    let ultimo_index = string.length - 1

    for (let index_caractere = ultimo_index; index_caractere >= 0; index_caractere -= 1){
        caractere = string[index_caractere]
        string_invertida += caractere
    }
    return string_invertida
}

function eh_consoante(caractere){
    const vogais = 'aeiouAEIOU'

    for(let vogal of vogais){

        if(vogal === caractere){
            return false
        }
    }
    return true

}

function eh_espaco(caractere){

    if(caractere === " "){
        return true
    }
    return false
}

function troca_consoantes_por_caractere(string, caractere_especifico){

    let frase_modificada = ""

    for(let caractere of string){
        if(eh_consoante(caractere) && !eh_espaco(caractere)){

            frase_modificada += caractere_especifico
        } else {
            frase_modificada += caractere
        }
    }

    return frase_modificada

}

main()