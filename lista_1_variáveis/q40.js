//40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import {input, print} from "./io_utils.js"

function main() {
    
    //Entradas
    const a = Number(input('Número de anos que fuma: '))
    const b = Number(input('Número de cigarros fumados por dia: '))
    const c = Number(input('Preço de uma carteira de cigarros: '))

    //Processamento
    const dinheiro_gasto = ((a * 365 * b)/20)*c

    //Saída
    print(`Dinheiro gasto pelo fumante:: ${dinheiro_gasto}`)

} main()