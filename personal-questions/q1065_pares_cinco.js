import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    let numero = 0
    let contador1 = 0
    let contador = 0

    while(contador1 < 5){
        contador1++
        numero = Number(lines.shift())
        if(numero % 2 === 0){
            contador++
        }

    }
    console.log(`${contador} valores pares`)
} main()