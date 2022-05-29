import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('N: '))
    let numero = 0

    numero = Number(input('Número: '))

    let maior = numero
    let contador = 1

    while(contador < N){
    
        numero = Number(input('Número: '))
        if(maior < numero) maior = numero
        contador++

    }

    console.log(`Maior Número: ${maior}`)

} main()