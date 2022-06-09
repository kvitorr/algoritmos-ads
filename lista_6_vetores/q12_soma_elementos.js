import { fill_matriz_number, get_matriz_quadrada, printa_matriz } from "./matriz_functions.js"
import { get_number } from "./utility.js"



function main(){

    const n = get_number('N: ')
    const matriz = get_matriz_quadrada(n)
    const matriz_quadradada_preenchida = fill_matriz_number(matriz)

    console.log('\n==== Matriz ====')
    printa_matriz(matriz_quadradada_preenchida)

    const soma_diagonal_principal = sum_diagonal_principal(matriz)
    const soma_diagonal_secundaria = sum_diagonal_secundaria(matriz)
    const soma_elementos_restantes = sum_elementos_restantes(matriz)

    console.log(`\nSoma dos elementos da diagonal principal: ${soma_diagonal_principal}`)
    console.log(`Soma dos elementos da diagonal principal: ${soma_diagonal_secundaria}`)
    console.log(`Soma dos elementos da diagonal principal: ${soma_elementos_restantes}`)



} 

function sum_diagonal_principal(matriz){

    const n = matriz.length

    let i = 0
    let j = 0

    let soma = 0

    while(i < n && j < n){

        soma += matriz[i][j]

        i++
        j++
    }
    return soma
}

function sum_diagonal_secundaria(matriz){

    const n = matriz.length

    let i = n - 1
    let j = 0

    let soma = 0

    while(j < n){

        soma += matriz[i][j]

        i--
        j++
    }
    return soma
}

function sum_elementos_restantes(matriz){

    const n = matriz.length

    let i = 0
    let j = 0

    let soma = 0

    const valor = (n - 1)

    for(let i = 0; i < n; i++){

        for(let j = 0; j < n; j++){

            if(!eh_igual(i, j) && !eh_igual(sum(i, j), valor)){
                soma += matriz[i][j]
            }
        }
    }
    return soma
}

const eh_igual = (x, y) => {return (x === y)}
const sum = (x, y) => {return (x+y)}


main()