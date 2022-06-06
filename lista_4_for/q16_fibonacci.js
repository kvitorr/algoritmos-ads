import { get_number } from "./utility.js";


function main(){

    const n = get_number('N: ')

    fibonacci(n)

} 

function fibonacci(n){

    let result = '0, 1, '

    let ultimo = 0
    let penultimo = 1

    let atual = ultimo + penultimo

    for(let i = 1; i < (n - 1); i += 1){

        atual = ultimo + penultimo
       
        ultimo = penultimo
        penultimo = atual

        if(i !== (n)) result += String(atual) + ", "
        else result += String(atual) + ", ..."

    }

    console.log(`\tSequência com ${n} termos: (${result})`)

}


main()