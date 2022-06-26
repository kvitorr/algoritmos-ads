



import { fill_matriz_number, get_matriz_quadrada, printa_matriz } from "./matriz_functions.js"
import { get_number } from "./utility.js"



function main(){

    const ordem = get_number('N: ')
    const matriz = get_matriz_quadrada(ordem)

    const matriz_preenchida = fill_matriz_number(matriz)

    const [soma_positivos, soma_negativos] = get_soma_elementos_positivos_negativos(matriz_preenchida)

    console.log('\nMatriz -------')
    printa_matriz(matriz_preenchida)
    console.log(`Soma dos elementos positivos: ${soma_positivos}`)
    console.log(`Soma dos elementos negativos: ${soma_negativos}`)
}

function get_soma_elementos_positivos_negativos(matriz){
    let soma_positivos = 0
    let soma_negativos = 0
    const ordem = matriz.length

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {

            if(matriz[i][j] > 0){
                soma_positivos += matriz[i][j]
            } else {
                soma_negativos += matriz[i][j]
            }
        }        
    }
    return [soma_positivos, soma_negativos]
}


main()
