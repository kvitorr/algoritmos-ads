//Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma.


import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const frase = input('Frase: ')

    if(eh_palindroma(frase)){
        console.log('É palíndroma')
    } else {
        console.log('Não é palíndrona')
    }

}

function eh_palindroma(frase){

    const frase_invertida = inverte_string(frase)

    if(frase_invertida === frase){
        return true
    }

    return false

}

function inverte_string(frase){

    const tamanho_frase = frase.length - 1
    let frase_invertida = ""
    let caractere

    for(let ultimo_index = tamanho_frase; ultimo_index >= 0; ultimo_index -= 1){
        caractere = frase[ultimo_index]

        frase_invertida +=  caractere
    }
    return frase_invertida
}

main()