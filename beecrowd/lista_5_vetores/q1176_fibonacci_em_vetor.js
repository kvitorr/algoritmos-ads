import fs from 'fs'
const lines = fs.readFileSync('./input/q1176_fibonacci_em_vetor.txt', 'utf-8').split('\r\n')

function main(){

    const n = Number(lines[0])
    let termo_fib = 0
    let fib


    for (let index = 1; index <= n; index++) {

        termo_fib = Number(lines[index])
        
        if (termo_fib === 0){
            console.log("Fib(0) = 0")
        } else if (termo_fib === 1){
            console.log("Fib(1) = 1")
        } else {
            fib = fibonacci(termo_fib)
            console.log(`Fib(${termo_fib}) = ${fib}`)
        }
    }
}

function fibonacci(n){

    let ultimo = 0
    let penultimo = 1

    let atual = ultimo + penultimo

    for(let i = 1; i < n; i += 1){

        atual = ultimo + penultimo
       
        ultimo = penultimo
        penultimo = atual

    }
    return atual
}

main()

