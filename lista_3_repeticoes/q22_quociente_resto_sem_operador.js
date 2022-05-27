import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const number1 = Number(input('Digite um número: '))
    const number2 = Number(input('Digite outro número: '))

    let resultSubtraction = number1 - number2
    let rest = 0
    let cont = 1

    while (resultSubtraction >= number2){
        resultSubtraction -= number2
        rest = resultSubtraction

        cont++
    }

    if(resultSubtraction === 0){
        console.log(`\t${number1} x ${number2} = ${cont}`)
        console.log('\tResto: 0')
    } else {
        console.log(`\t${number1} x ${number2} = ${cont}`)
        console.log(`\tResto: ${rest}`)
    }








} main()