import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('N: '))
    const limiteInferior = Number(input('Limite Inferior: '))
    const limiteSuperior = Number(input('Limite superior: '))

    let result = ''
    let contador = limiteInferior

    while(contador < limiteSuperior){
        
        if(ehMultiplo(contador, N)) result += contador.toString() + " "

        contador++
    }

    console.log(`Múltiplos entre (${limiteInferior}, ${limiteSuperior}) : ${result}`)

} 

const ehMultiplo = (n1, N) => {return (n1 % N) === 0}
main()