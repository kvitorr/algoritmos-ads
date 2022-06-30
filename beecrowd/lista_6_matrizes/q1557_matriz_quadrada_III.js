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
    const T = String(matriz[ordem - 1][ordem - 1]).length    
    let matriz_string = ''
    let spaces

    for (let i = 0; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            spaces = get_spaces(matriz[i][j], T)

            if(j !== (ordem - 1)) matriz_string += `${spaces}${matriz[i][j]} `
            else matriz_string += `${spaces}${matriz[i][j]}\n`
        }
    }
    console.log(matriz_string)
}


function preenche_diagonal_matriz(matriz, coluna){
    const ordem = matriz.length
    let numero = sequencia(coluna)
    let linha = 0

    for (let i = ordem - coluna; i >= 1; i--){
        matriz[linha][coluna] = numero
        matriz[coluna][linha] = numero
        
        numero *= 4 
        linha++
        coluna++
    }
}


function sequencia(coluna){
    let termo = 1
    for (let i = 0; i < coluna; i++) {
        termo += termo 
    }
    return termo
}


function get_spaces(elemento, tamanho_maior_numero){
    const tamanho = String(elemento).length
    const qtd_de_espacos = tamanho_maior_numero - tamanho
    let spaces = ''

    for (let i = 0; i < qtd_de_espacos; i++) {
        spaces += ' '
    }
    return spaces
}


main()