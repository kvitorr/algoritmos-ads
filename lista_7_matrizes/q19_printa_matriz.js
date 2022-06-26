import { fill_matriz_number, get_matriz_quadrada, printa_matriz } from "./matriz_functions.js"
import { get_number } from "./utility.js"


function main(){

    const matriz = get_matriz_quadrada(6)

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            
            if(i === 0 || i === 5 || j === 0 || j === 5){
                matriz[i][j] = 1
            } else if ((i === 1 || i === 4) && (j !== 0 && j !== 5)){
                matriz[i][j] = 2
            } else if((i === 2 || i === 3) && (j !== 1 && j !== 4)) {
                matriz[i][j] = 3
            } else {
                matriz[i][j] = 2
            }
            
        }    
    }

    printa_matriz(matriz)

} main()