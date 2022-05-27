import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const number1 = Number(input('Digite um número: '))
    const number2 = Number(input('Digite outro número: '))

    let cont = 0
    let resultMultiplication = 0

    while (cont < number1){
        resultMultiplication += number2
        cont++
    }

    console.log(`${number1} x ${number2} = ${resultMultiplication}`)




} main()