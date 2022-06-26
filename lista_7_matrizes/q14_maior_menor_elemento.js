import { fill_matriz_number, get_matriz, get_matriz_quadrada } from "./matriz_functions.js"
import { get_number } from "./utility.js"



function main(){

    const ordem = get_number('N: ')
    const matriz = get_matriz_quadrada(ordem)
    const matriz_preenchida = fill_matriz_number(matriz)

    const [maior, i_maior, j_maior] = get_maior_e_posicao_matriz(matriz_preenchida)
    const [menor, i_menor, j_menor] = get_menor_e_posicao_matriz(matriz_preenchida)

    console.log(`Menor elemento: M[${i_menor}][${j_menor}] = ${menor}\nMaior elemento: M[${i_maior}][${j_maior}] = ${maior}`)
} 

function get_maior_e_posicao_matriz(matriz){

    let i_maior = 0
    let j_maior = 0
    let elemento_maior = matriz[0][0]
    const ordem = matriz.length

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            if(matriz[i][j] > elemento_maior){
                elemento_maior = matriz[i][j]
                i_maior = i + 1
                j_maior = j + 1
            }   
        }
    }
    return [elemento_maior, i_maior, j_maior]
}

function get_menor_e_posicao_matriz(matriz){

    let i_menor = 0
    let j_menor = 0
    let elemento_menor = matriz[0][0]
    const ordem = matriz.length

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            if(matriz[i][j] < elemento_menor){
                elemento_menor = matriz[i][j]
                i_menor = i + 1
                j_menor = j + 1
            }   
        }
    }
    return [elemento_menor, i_menor, j_menor]
}

main()