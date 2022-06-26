import { fill_matriz_number, get_matriz } from "./matriz_functions"
import { get_number } from "./utility"



function main(){

    const ordem = get_number('N: ')
    const matriz = get_matriz(ordem)
    const matriz_preenchida = fill_matriz_number(matriz)

    const [maior, i_maior, j_maior] = get_maior_e_posicao_matriz(matriz_preenchida)

} 

function get_maior_e_posicao_matriz(matriz){

    let i_maior, i_menor, elemento_maior
    const ordem = matriz.length

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            


            
        }
    }



}

main()