import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const number = Number(input('N: '))

    let contadorUp = 1
    let contadorDown = number

    let soma = 0

    while(contadorUp <= number){
        soma += (contadorUp/contadorDown) 

        contadorUp++
        contadorDown--
    }

    console.log(`Soma = ${soma.toFixed(2)}`)

} main()