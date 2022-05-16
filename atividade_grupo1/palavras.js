import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const frase = input('Digite uma frase com no mínimo 80 e no máximo 180 caracteres: ')

    if(frase.length >= 80 && frase.length <=180){
        const qtdPalavras = frase.split(' ').length

        console.log(`Existem ${qtdPalavras} palavras na frase`)
    } else {
        console.log('A frase digitada não está dentro das condições estabelecidas.')
    }





} main()