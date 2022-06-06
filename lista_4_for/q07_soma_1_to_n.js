import { get_number } from "./utility.js";


function main(){

    const n = get_number('N')

    const soma = soma_1_to_n(n)

    console.log(`Soma dos números entre 1 e ${n}: ${soma}`)
    
} 

function soma_1_to_n(n){

    let soma = 0

    for(let i = 2; i < n; i+= 1){
        soma += i
    }
    return soma
}

main()