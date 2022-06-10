import { get_number } from "./utility.js"


function main(){

    const n = get_number('N: ')
    let soma = 0
    let top = 1

    for (let index = n; index > 0; index--) {
        
        soma += top/index
        top++

    }

    console.log(`Soma: ${soma}`)


} main()