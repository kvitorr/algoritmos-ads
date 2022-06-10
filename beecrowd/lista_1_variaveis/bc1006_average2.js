import {input} from "./io_utils.js"

function main() {

    //Entradas
    const A = Number(input('DIgite a primeira nota: '))
    const B = Number(input('DIgite a segunda nota: '))
    const C = Number(input('DIgite a terceira nota: '))

    //Processamento
    const media = ((A * 2)+(B * 3)+(C * 5))/10

    //Saída
    console.log(`Média ponderada: ${media.toFixed(1)}`)
}

main()