import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const numero = Number(input('Digite um numero: '))

    if(numero === parseInt(numero)){
        console.log('\tNumero inteiro')
    } else {
        console.log('\tNumero decimal')
    }
} main()