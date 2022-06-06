import { get_number, eh_impar } from "./utility.js";



function main(){

    const limiteInferior = get_number('Limite Inferior: ')
    const limiteSuperior = get_number('Limite Superior: ')

    const impares = impares_1_to_n(limiteInferior, limiteSuperior)

    console.log(`\tNúmero impares no intervalo [${limiteInferior}, ${limiteSuperior}]: ${impares}`)
}

function impares_1_to_n(limiteInferior, limiteSuperior){
    let impar = ""

    for(let i = limiteInferior; i <= limiteSuperior; i+= 1){
        if(eh_impar(i)){
           impar += String(i) + " "
        }
    }
    return impar
}


main()