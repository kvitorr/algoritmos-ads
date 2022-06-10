import {input} from "./io_utils.js"

function main() {

    //Entradas
    const dist = input('Digite a distancia total percorrida (em Km) ')

    const totalCombustivel = input('Digite o total de combustível gasto: ')

    //Processamento
    const consumoMedio = dist / totalCombustivel


    //Saída
   console.log(`${consumoMedio.toFixed(3)} km/l`)
}

main()