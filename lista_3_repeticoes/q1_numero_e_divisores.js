import prompt from 'prompt-sync'
const input = prompt()

function main(){


    let divisor = 1
    let divisores = ""

    let numero = Number(input('Digite um número: '))

    while(numero !== 0){

        while(divisor !== (Math.abs(numero) + 1)){
            if(ehDivisor(numero, divisor)){
                divisores += String(divisor) + " "
            }
            divisor++
        }
        divisor = 1

        console.log(`\tNúmero: ${numero}. Divisores: ${divisores}`)
        divisores = ""

        numero = Number(input('Digite um número: '))

    }    
} 

function ehDivisor(numero, divisor){
    if((numero % divisor) === 0){
        return true
    } else {
        return false
    }
} main()