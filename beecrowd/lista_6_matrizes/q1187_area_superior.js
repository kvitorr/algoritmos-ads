import fs from 'fs'
const lines = fs.readFileSync('./inputs/q1181_input.txt', 'utf-8').split('\r\n')

function main(){
    const operacao = lines[0]
    const matriz = fill_matriz()

    if(operacao === 'S'){
        const soma = soma_elementos_matriz(matriz)
        console.log(soma.toFixed(1))
    } else if (operacao === 'M'){
        const media = media_elementos_matriz(matriz)
        console.log(media.toFixed(1))
    }
} 

function fill_matriz(){
    const matriz = new Array(12)
    let contador = 1

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


function soma_elementos_matriz(matriz){
    let soma = 0
    const ordem = matriz.length - 1

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(acima_diagonal_secundaria(i, j, ordem) && acima_diagonal_principal(i, j)){
                soma += Number(matriz[i][j])
            }
        }
    }

    return soma
}

function media_elementos_matriz(matriz){
    let soma = 0
    let contador = 0
    const ordem = matriz.length - 1
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(acima_diagonal_secundaria(i, j, ordem) && acima_diagonal_principal(i, j)){
                soma += Number(matriz[i][j])
                contador++
            }
        }
    }

    return soma/contador
} 

const acima_diagonal_secundaria = (i, j, ordem) => {return i + j < ordem} 
const acima_diagonal_principal = (i, j) => {return j > i} 

main()