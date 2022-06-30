import fs from 'fs'
const lines = fs.readFileSync('./inputs/q1181_input.txt', 'utf-8').split('\r\n')

function main(){
    const index = Number(lines[0])
    const operacao = lines[1]
    const matriz = fill_matriz()

    if(operacao === 'S'){
        const soma = soma_coluna_matriz(matriz, index)
        console.log(soma.toFixed(1))
    } else if (operacao === 'M'){
        const media = media_coluna_matriz(matriz, index)
        console.log(media.toFixed(1))
    }
} 

function fill_matriz(){
    const matriz = new Array(12)
    let contador = 2

    for (let i = 0; i < 12; i++) {
        matriz[i] = new Array(12)
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = lines[contador]
            contador++
        }        
    }

    return matriz
}


function soma_coluna_matriz(matriz, coluna){
    let soma = 0

    for (let index = 0; index < matriz.length; index++) {
        soma += Number(matriz[index][coluna])
    }

    return soma
}

function media_coluna_matriz(matriz, coluna){
    let soma = 0

    for (let index = 0; index < matriz.length; index++) {
        soma += Number(matriz[index][coluna])
    }

    return soma/matriz.length
} main()