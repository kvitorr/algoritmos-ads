import {input} from "./io_utils.js"

function main() {
    
    //Entrada
    const distancia = input("Digite a distancia entre os carros X e Y ")

    //Processamento
    const tempoGasto = distancia * 2

    //Saida
    console.log(`${tempoGasto} minutos`)
}

main()