import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let numero = input('Digite um número: ')

    while(numero !== "0"){
        console.log(`\tO número possui ${numero.length} números`)
        numero = input('Digite um número: ')
    }

} main()