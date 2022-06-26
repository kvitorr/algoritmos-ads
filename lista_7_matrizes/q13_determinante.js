import { fill_matriz_number, get_matriz_quadrada, printa_matriz } from "./matriz_functions.js"
import { get_number } from "./utility.js"



function main(){

    const ordem = get_number('N: ')
    const matriz = get_matriz_quadrada(ordem)
    const matriz_preenchida = fill_matriz_number(matriz)

    let determinante = get_determinante(matriz_preenchida)

    console.log('\nMatriz ===========')
    printa_matriz(matriz_preenchida)

    console.log(`Determinante: ${determinante}`)
} 

function get_determinante(matriz_preenchida){

    const ordem = matriz_preenchida.length

    if(ordem === 2){
        return get_determinante_ordem_2(matriz_preenchida)
    } else if (ordem === 3){
        return get_determinante_ordem_3(matriz_preenchida)
    }

}

function get_determinante_ordem_2(matriz){
    let first_product = 1
    let second_product = 1

    for(let i = 0; i < 2; i += 1){
        for (let j = 0; j < 2; j += 1) {
            if(i === j){
                first_product *= matriz[i][j]
            } else {
                second_product *= matriz[i][j]
            }
        }
    }
    const determinante = first_product - second_product
    return determinante
}

function get_determinante_ordem_3(matriz){

    const first_product =  ((matriz[0][0] * matriz[1][1] * matriz[2][2]) + (matriz[0][1] * matriz[1][2] * matriz[2][0]) + (matriz[0][2] * matriz[1][0] * matriz[2][1]))
    const second_product = ((matriz[0][2] * matriz[1][1] * matriz[2][0]) + (matriz[0][0] * matriz[1][2] * matriz[2][1]) + (matriz[0][1] * matriz[1][0] * matriz[2][2]))

    const determinante = first_product - second_product

    console.log(first_product, second_product)
    return determinante
}


main()