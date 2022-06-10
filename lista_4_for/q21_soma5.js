import { get_number } from "./utility.js"


function main(){

    let soma = 0
    let contador = 1

    for (let index = 1; index <= 50; index++) {
        
        soma += contador/index
        contador += 2
    }

    console.log(`Soma: ${soma.toFixed(2)}`)


} main()