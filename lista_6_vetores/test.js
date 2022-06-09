import { input, get_number } from "./utility.js"

function printa_matriz(matriz){

    const qtd_de_colunas = matriz.length

    for(let i = 0; i < qtd_de_colunas; i++){
        console.log(matriz[i])
    }
}


function get_matriz_quadrada(n){

    const matriz = new Array(n)

    for(let index = 0; index < n; index++){
        matriz[index] = new Array(n)
    }

    return matriz

}

function fill_matriz_string(matriz){

    const qtd_de_colunas = matriz.length
    const qtd_de_linhas = matriz[0].length

    for(let i = 0; i < qtd_de_colunas; i++){

        console.log(`==== Linha ${i} ====`)
        for(let j = 0; j < qtd_de_linhas; j++){            
            matriz[i][j] = input(`[${i}][${j}] = `)
        }
    }
    return matriz
}

function get_matriz_quadrada_transposta(matriz){

    const qtd_de_colunas = matriz.length
    const qtd_de_linhas = matriz[0].length

    const matriz_transposta = get_matriz_quadrada(qtd_de_colunas)

    for(let i = 0; i < qtd_de_colunas; i++){

        for(let j = 0; j < qtd_de_linhas; j++){

            matriz_transposta[j][i] = matriz[i][j]
        }
    }

    return matriz_transposta

}

function get_matriz(qtd_de_linhas, qtd_de_colunas){

    const vetor = new Array(qtd_de_linhas)

    for(let i = 0; i < qtd_de_linhas; i++){
        vetor[i] = new Array(qtd_de_colunas)
    }

    return vetor
}