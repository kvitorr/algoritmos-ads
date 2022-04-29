// 38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.


import {input, print} from "./io_utils.js"

function main() {

    //Entrada
    const f1 = input('Digite a primeira fração no formato x/y: ')
    const f2 = input('Digite a primeira fração no formato x/y: ')

    //Processamento
    const f1_split = f1.split("/")
    const f2_split = f2.split("/")

    //Primeira fração
    const n1 = Number(f1_split[0])
    const d1 = Number(f1_split[1])

    //Segunda fração
    const n2 = Number(f2_split[0])
    const d2 = Number(f2_split[1])

    //Soma das frações:

    const n3 = ((n1*d2)+(n2*d1))
    const d3 = (d1 * d2)


    //Saída
    console.log(`A soma das frações é igual a ${n3}/${d3}`)

} main()