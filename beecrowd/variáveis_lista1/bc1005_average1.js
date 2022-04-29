import {input} from "./io_utils.js"



function main() {

    //Entradas
    const A = Number(input('DIgite a primeira nota: '))
    const B = Number(input('DIgite a segunda nota: '))

    //Processamento
    const media = ((A * 3.5)+(B * 7.5))/11

    //Saída
    console.log(`Média ponderada: ${media.toFixed(5)}`)
}

main()