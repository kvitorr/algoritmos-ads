import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const number = Number(input('N: '))

    let contador = 1
    let numberFormula = number
    let soma = 0

    while(contador <= number){

        if(!ehPar(contador)){
            soma += contador/numberFormula

        } else if (ehPar(contador)){
            soma -= numberFormula/contador
        }
        numberFormula--
        contador++
    }

    console.log(`Soma = ${soma.toFixed(2)}`)

} 

const ehPar = (n1) => {return (n1 % 2) === 0}

main()