import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numero1 = Number(input('Digite um número: '))
    let numero2 = Number(input('Digite outro número: '))

    while(numero1 !== numero2){
        console.log('\tOs números não são iguais')
        numero2 = Number(input('\tDigite outro número: '))
    }

} main()