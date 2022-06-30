import fs from 'fs'
const lines = fs.readFileSync('./inputs/q1181_input.txt', 'utf-8').split('\r\n')

function main(){
    let ordem
    let matriz

    while(lines.length > 0){
        ordem = Number(lines.shift())
        matriz = get_matriz(ordem)

        printa_matriz(matriz)
        console.log()
    }
}

function get_matriz(ordem){

    const i_central = Math.floor(ordem/2)
    const j_central = Math.floor(ordem/2)
    const matriz = create_matriz(ordem)

    preenche_diagonal_principal(matriz)
    preenche_diagonal_secundaria(matriz)

    preenche_parte_interna(matriz)
    preenche_parte_externa(matriz)

    matriz[i_central][j_central] = 4
    return matriz
}

function create_matriz(ordem){
    let matriz = new Array(ordem)

    for (let j = 0; j < ordem; j++) {
        matriz[j] = new Array(ordem)
    }
    return matriz
}

function printa_matriz(matriz){
    const ordem = matriz.length
    let matriz_string = ''

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            if(j !== (ordem - 1)) matriz_string += `${matriz[i][j]}`
            else if(i !== (ordem - 1)) matriz_string += `${matriz[i][j]}\n`
            else matriz_string += `${matriz[i][j]}`
        }
    }
    console.log(matriz_string)
}


function preenche_diagonal_principal(matriz){
    const ordem = matriz.length
    let j = 0

    for (let i = 0; i < ordem; i++) {
        matriz[i][j] = 2
        j++
    }
}

function preenche_diagonal_secundaria(matriz){
    const ordem = matriz.length
    let j = ordem - 1

    for (let i = 0; i < ordem; i++) {
        matriz[i][j] = 3
        j--
    }
}


function preenche_parte_interna(matriz){
    const ordem = matriz.length
    const inicio = Math.floor(ordem/3)
    const fim = ordem - inicio

    for (let i = inicio; i < fim; i++) {
        for (let j = inicio; j < fim; j++) {
           matriz[i][j] = 1
        }
    }
}

function preenche_parte_externa(matriz){
    const ordem = matriz.length
    
    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
           if(matriz[i][j] === undefined){
            matriz[i][j] = 0
           }
        }
    }
}

main()