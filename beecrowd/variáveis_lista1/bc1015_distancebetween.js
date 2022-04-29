import {input} from "./io_utils.js"

function main() {

    //Entradas de vários dados em uma linha
    const c1 = input("Digite a coordenada x1: ")
    const c2 = input("Digite a coordenada x2: ")

    //Split dos dados e armazenamento em um vetor
    const pic1 = c1.split(" ")
    const pic2 = c2.split(" ")

    //Atribuição dos dados a variáveis específicas
    const x1 = Number(pic1[0])
    const y1 = Number(pic1[1])

    const x2 = Number(pic2[0])
    const y2 = Number(pic2[1])

    //Cálculos necessários
    const d1 = (x2-x1)**2
    const d2 = (y2-y1)**2
    const d3 = d1 + d2


    //Saída
    console.log(`${Math.sqrt(d3).toFixed(4)}`)
}

main()