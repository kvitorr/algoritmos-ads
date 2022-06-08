import { get_number } from "./utility.js"


function main(){

    const n = get_number('N: ')
    const vetor_fibonacci = fibonacci(n)

    console.log(`Vetor Fibonacci com ${n} elementos: [${vetor_fibonacci.join(', ')}]`)

} 

function fibonacci(n){

    const vetor_fibonacci = new Array(n)

    vetor_fibonacci[0] = 0
    vetor_fibonacci[1] = 1

    let ultimo = 0
    let penultimo = 1

    let atual = ultimo + penultimo

    for(let i = 1; i < (n - 1); i += 1){

        atual = ultimo + penultimo
       
        ultimo = penultimo
        penultimo = atual

        vetor_fibonacci[i + 1] = atual 

    }
    return vetor_fibonacci
}



main()