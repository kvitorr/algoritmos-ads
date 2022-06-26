import { get_number} from "./utility.js"
import { get_matriz_quadrada, get_matriz_quadrada_transposta, printa_matriz, fill_matriz_string } from "./matriz_functions.js"


function main(){

    const n = get_number('N: ')

    const matriz_quadrada = get_matriz_quadrada(n)
    const matriz_quadradada_preenchida = fill_matriz_string(matriz_quadrada) 

    const matriz_transposta = get_matriz_quadrada_transposta(matriz_quadradada_preenchida)

    console.log('\nMatriz original: ')
    printa_matriz(matriz_quadradada_preenchida)


    console.log('\nMatriz transposta: ')
    printa_matriz(matriz_transposta)


} main()