import { get_number, numero_primo } from "./utility.js";



function main(){

    const limiteInferior = get_number('Limite Inferior: ')
    const limiteSuperior = get_number('Limite Superior: ')

    const primos = primos_1_to_n(limiteInferior, limiteSuperior)

    console.log(`\tNúmero primos no intervalo [${limiteInferior}, ${limiteSuperior}]: ${primos}`)
}

function primos_1_to_n(limiteInferior, limiteSuperior){
    let primos = ""

    for(let i = limiteInferior; i <= limiteSuperior; i+= 1){
        if(numero_primo(i)){
            primos += String(i) + " "
        }
    }
    return primos
}


main()