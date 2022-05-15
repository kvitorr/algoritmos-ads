import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    let numero = 0
    let soma = 0
    let qtd_positivos = 0

    while(lines.length > 0){
        numero = Number(lines.shift())

        if(numero > 0){
            soma += numero
            qtd_positivos++
        }
    }

    const media = soma/qtd_positivos

    console.log(`${qtd_positivos} valores positivos`)
    console.log(media.toFixed(1))
} main()