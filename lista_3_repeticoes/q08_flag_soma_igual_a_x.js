import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const x = Number(input('Digite um número: '))
    let numero1 = Number(input('Digite um número: '))
    let numero2 = Number(input('Digite um número: '))

    while((numero1 + numero2) !== x){
        numero1 = numero2
        numero2 = Number(input('Digite um número: '))
    }
    console.log(`\t${numero1} + ${numero2} = ${x}`)
} main()