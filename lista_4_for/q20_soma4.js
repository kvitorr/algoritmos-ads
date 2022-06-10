import { get_number, eh_par } from "./utility.js"


function main(){

    const n = get_number('N: ')
    let soma = 0

    for (let index = 1; index <= n; index++) {
        
        if(!eh_par(index)){
            soma += 1/index
        } else {
            soma -= 1/index
        }
    }

    console.log(`Soma: ${soma}`)


} main()