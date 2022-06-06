import { get_number } from "./utility.js";


function main(){

    const n = get_number('N: ')

    sequencia(n)

} 

function sequencia(n){

    let termo = 0
    let result = ''

    for(let i = 1; i <= n; i += 1){

        termo += i 
        if(i !== (n)) result += String(termo) + ", "
        else result += String(termo) + ", ..."

    }

    console.log(`\tSequência com ${n} termos: (${result})`)

}


main()