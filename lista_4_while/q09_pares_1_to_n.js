import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const limiteInferior = Number(input('Limite Inferior: '))
    const limiteSuperior = Number(input('Limite superior: '))

    let result = ''
    let contador = limiteInferior

    while(contador < limiteSuperior){
        
        if(ehPar(contador)) result += contador.toString() + " "

        contador++
    }

    console.log(`Pares entre (${limiteInferior}, ${limiteSuperior}) : ${result}`)

} 

const ehPar = (n1) => {return (n1 % 2) === 0}
main()