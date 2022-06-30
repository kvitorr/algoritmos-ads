import fs from 'fs'
const lines = fs.readFileSync('./inputs/q1181_input.txt', 'utf-8').split('\r\n')

function main(){

    let index = 0
    let ordem
    let matriz

    while(Number(lines[index]) !== 0){
        ordem = Number(lines[index])
        matriz = get_matriz(ordem)

        printa_matriz_justificada(matriz)

        index++
    }
}

function get_matriz(ordem){

    const matriz = create_matriz(ordem)
        for (let j = 0; j < ordem; j++) {
            preenche_diagonal_matriz(matriz, j)            
        }
    
    return matriz
}


function create_matriz(ordem){
    let matriz = new Array(ordem)

    for (let j = 0; j < ordem; j++) {
        matriz[j] = new Array(ordem)
    }
    return matriz
}

function printa_matriz_justificada(matriz){

    const ordem = matriz.length

    let matriz_string = ''

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {

            if(matriz[i][j] >= 100){
                if(j !== (ordem - 1)) matriz_string += `${matriz[i][j]} `
                else matriz_string += `${matriz[i][j]}\n`
            } else if(matriz[i][j] >= 10){
                if(j !== (ordem - 1)) matriz_string += ` ${matriz[i][j]} `
                else matriz_string += ` ${matriz[i][j]}\n`
            } else {
                if(j !== (ordem - 1)) matriz_string += `  ${matriz[i][j]} `
                else matriz_string += `  ${matriz[i][j]}\n`
            }
        }
    }

    console.log(matriz_string)
}


function preenche_diagonal_matriz(matriz, coluna){

    const ordem = matriz.length

    let numero = coluna

    let linha = 0

    for (let i = ordem - coluna; i >= 1; i--){
        
        matriz[linha][coluna] = (numero + 1)
        matriz[coluna][linha] = (numero + 1)
        

        linha++
        coluna++
    }

}

main()