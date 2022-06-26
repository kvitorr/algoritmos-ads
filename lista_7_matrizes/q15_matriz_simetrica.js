import { fill_matriz_number, get_matriz_quadrada } from "./matriz_functions.js"
import { get_number } from "./utility.js"




function main(){
    const ordem = get_number('N: ')
    const matriz = get_matriz_quadrada(ordem)
    const matriz_preenchida = fill_matriz_number(matriz)

    if(eh_matriz_simetrica(matriz_preenchida)){
        console.log('É uma matriz simétrica')
    } else {
        console.log('Não é uma matriz simétrica')
    }
} 

function eh_matriz_simetrica(matriz){
    const ordem = matriz.length
    
    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            
            if(matriz[i][j] !== matriz[j][i]){
                return false
            }
        }        
    }
    return true
}

main()