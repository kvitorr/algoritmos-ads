import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    const numero = Number(lines.shift())
    let indice = 1
    let tabuada = 0

    while(indice <= 10){

        tabuada = numero * indice

        console.log(`${indice} x ${numero} = ${tabuada}`)
        
        indice++
    }
} main()