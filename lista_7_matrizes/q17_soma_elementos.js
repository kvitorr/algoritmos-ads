import { fill_matriz_number, get_matriz_quadrada, printa_matriz } from "./matriz_functions.js"
import { get_number } from "./utility.js"



function main(){

    const ordem = get_number('N: ')
    const matriz = get_matriz_quadrada(ordem)

    const matriz_preenchida = fill_matriz_number(matriz)

    const [maior_soma, linha_maior] = get_maior_soma_elementos_e_linha(matriz_preenchida)
    const [menor_soma, linha_menor] = get_menor_soma_elementos_e_linha(matriz_preenchida)


    console.log('\nMatriz -------')
    printa_matriz(matriz_preenchida)
    console.log(`Maior soma de elementos: ${maior_soma} | Linha: ${linha_maior}`)
    console.log(`Menor soma de elementos: ${menor_soma} | Linha: ${linha_menor}`)


} 

function get_maior_soma_elementos_e_linha(matriz){

    let linha = 1
    let soma = 0
    let maior_soma = 0

    const ordem = matriz.length
    
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < ordem; j++) {
            maior_soma += matriz[i][j]
        }
    }

    for (let i = 1; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            soma += matriz[i][j]
        }

        if(soma > maior_soma){
            maior_soma = soma
            soma = 0
            linha = i + 1
        } else {
            soma = 0
        }
    }

    return [maior_soma, linha]
}

function get_menor_soma_elementos_e_linha(matriz){

    let linha = 1
    let soma = 0
    let menor_soma = 0

    const ordem = matriz.length
    
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < ordem; j++) {
            menor_soma += matriz[i][j]
        }
    }

    for (let i = 1; i < ordem; i++) {
        for (let j = 0; j < ordem; j++) {
            soma += matriz[i][j]
        }

        if(soma < menor_soma){
            menor_soma = soma
            soma = 0
            linha = i + 1
        } else {
            soma = 0
        }
    }

    return [menor_soma, linha]
}

main()