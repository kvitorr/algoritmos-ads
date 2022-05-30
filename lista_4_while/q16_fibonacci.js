import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const N = numberN()
    let ultimo = 0
    let penultimo = 1
    let result = '0, 1, '
    let termo

    let contador = 0


    while(contador < N){

        termo = ultimo + penultimo

        if(contador === (N - 1)) result += termo.toString()
        else result += termo.toString() + ", "

        ultimo = penultimo
        penultimo = termo
    
        contador++
    }

    console.log(`Sequencia de Fibonacci com ${N} termos: (${result})`)

} 

function numberN(){
    let N = 0
    while(true){
        N = Number(input('N: '))
        if(N >= 2) return N
        console.log('ERRO: N deve ser maior ou igual a 2.')
    }
}

main()