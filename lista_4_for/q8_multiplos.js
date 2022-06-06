import { get_number } from "./utility.js";



function main(){

    const n = get_number('N')
    const limiteInferior = get_number('Limite Inferior')
    const limiteSuperior = get_number('Limite Superior')

    const multiplos = multiplos_1_to_n(n, limiteInferior, limiteSuperior)

    console.log(`\tMúltiplos de ${n} no intervalo [${limiteInferior}, ${limiteSuperior}]: ${multiplos}`)
}

function multiplos_1_to_n(n, limiteInferior, limiteSuperior){

    let multiplos = ""

    for(let i = limiteInferior; i <= limiteSuperior; i+= 1){
        if(eh_multiplo(i, n)){
            multiplos += String(i) + " "
        }
    }

    return multiplos
}

const eh_multiplo = (numero, n) => {return (numero % n) === 0}

main()