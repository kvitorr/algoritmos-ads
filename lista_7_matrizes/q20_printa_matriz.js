import { fill_matriz_number, get_matriz_quadrada, printa_matriz } from "./matriz_functions.js"
import { get_number } from "./utility.js"


function main(){

    const ordem = get_number('N: ')
    const matriz = get_matriz_quadrada(ordem)
    let contador = 1

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            matriz[i][j] = contador
            contador++
        }    
    }

    printa_matriz(matriz)

} main()