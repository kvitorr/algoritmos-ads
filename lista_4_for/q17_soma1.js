import { get_number } from "./utility.js"


function main(){

    const n = get_number('N: ')
    let soma = 0

    for (let index = 1; index <= n; index++) {
        soma += 1/index
    }

    console.log(`Soma: ${soma}`)


} main()