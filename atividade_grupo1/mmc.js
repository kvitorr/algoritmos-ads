import prompt from 'prompt-sync'
const input = prompt()

function main(){

    console.log('> Programa que encontra o MMC de dois números')
    let numero1 = Number(input('Digite um número: '))
    let numero2 = Number(input('Digite outro número: '))
    let MMC = 1


    if(numero1 === 0){
        console.log('Não é possível calcular o MMC de 0')
        numero1 = Number(input('Digite um número válido: '))
    } else if (numero2 === 0){
        console.log('Não é possível calcular o MMC de 0')
        numero2 = Number(input('Digite um número válido: '))
    }
    
    while(!ehMultiplo(MMC, numero1) || !ehMultiplo(MMC, numero2) ){
        MMC++
    }
    
    console.log(`O MMC de ${numero1} e ${numero2} é ${MMC}`)

} 

const ehMultiplo = (n1, n2) => {return ((n1%n2)===0) }

main()