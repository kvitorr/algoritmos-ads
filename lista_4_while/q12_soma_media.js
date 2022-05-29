import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('N: '))
    let numero = 0

    let soma = 0
    let contador = 0

    while(contador < N){
    
        numero = Number(input('Número: '))
        soma += numero

        contador++
    }

    const media = (soma/contador).toFixed(1)
    console.log(`Soma: ${soma}. Media: ${media}`)

} 


main()