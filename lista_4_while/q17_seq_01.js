import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const number = Number(input('N: '))

    let contador = 1

    let soma = 0

    while(contador <= number){
        soma += (1/contador) 
        contador++
    }

    console.log(`Soma = ${soma.toFixed(2)}`)

} main()