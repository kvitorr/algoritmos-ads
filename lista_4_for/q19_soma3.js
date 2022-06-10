import { get_number, eh_par } from "./utility.js"


function main(){

    const n = get_number('N: ')
    let soma = 0
    let contador = 1

    for (let index = n; index > 0; index--) {
        
        if(!eh_par(contador)){
            soma += contador/index
        } else {
            soma -= index/contador
        }
        contador++
    }

    console.log(`Soma: ${soma}`)


} main()