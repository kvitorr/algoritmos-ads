import { get_number, eh_par } from "./utility.js";



function main(){

    const limiteInferior = get_number('Limite Inferior: ')
    const limiteSuperior = get_number('Limite Superior: ')

    const pares = pares_1_to_n(limiteInferior, limiteSuperior)

    console.log(`\tNúmero pares no intervalo [${limiteInferior}, ${limiteSuperior}]: ${pares}`)
}

function pares_1_to_n(limiteInferior, limiteSuperior){

    let par = ""

    for(let i = limiteInferior; i <= limiteSuperior; i+= 1){
        if(eh_par(i)){
            par += String(i) + " "
        }
    }

    return par
}


main()