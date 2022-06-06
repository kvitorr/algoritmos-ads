import { get_number } from "./utility.js";


function main(){

    const numero = get_number('Numero')
    
    const fatorial_result = fatorial(numero)
    
    console.log(`${numero}! = ${fatorial_result}`)

} 

function fatorial(numero){
    let fatorial = 1

    for(let i = numero; i >= 1; i -= 1){
        fatorial *= i
    }
    return fatorial
}



main()