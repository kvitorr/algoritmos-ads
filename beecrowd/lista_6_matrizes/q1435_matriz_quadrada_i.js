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

    let inicio = 0
    let final = ordem - 1

    const matriz = create_matriz(ordem)

    for (let k = 0; k < ordem/2; k++) {
        
        for (let i = 0; i < ordem; i++) {
            for (let j = 0; j < ordem; j++) {

                if((i === inicio || i === final || j === inicio || j === final) && matriz[i][j] === undefined){
                    matriz[i][j] = inicio + 1
                }
            }
        }

        inicio++
        final--
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

            if(matriz[i][j] >= 10){
                matriz_string += ` ${matriz[i][j]} `
            } else {
                if(j !== (ordem - 1)) matriz_string += `  ${matriz[i][j]} `
                else matriz_string += `  ${matriz[i][j]}\n`
            }
        }
    }

    console.log(matriz_string)
}



main()