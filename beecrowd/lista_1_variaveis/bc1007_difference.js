import {input} from "./io_utils.js"

function main() {

    //Entradas
    const A = Number(input('DIgite o primeiro valor: '))
    const B = Number(input('DIgite o segundo valor: '))
    const C = Number(input('DIgite o terceiro valor: '))
    const D = Number(input('Digite o quarto valor: '))

    //Processamento
    const DIFERENCA = ((A * B) - (C * D))

    //Saída
    console.log(`DIFERENCA = ${DIFERENCA}`)
}

main()