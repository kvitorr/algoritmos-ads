import { get_matriz_quadrada, printa_matriz } from "./matriz_functions.js"
import { get_number } from "./utility.js"



function main(){

    const ordem = get_number('N: ')

    const matriz_identidade = get_matriz_identidade(ordem)

    printa_matriz(matriz_identidade)
} 

function get_matriz_identidade(ordem){

    const matriz = get_matriz_quadrada(ordem)
    
    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            if(i === j){
                matriz[i][j] = 1
            } else {
                matriz[i][j] = 0
            }
        }        
    }
    return matriz
}

main()