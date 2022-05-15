import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')


function main(){

    let numero = 0
    let qtd_pares = 0

    while(lines.length > 0){
        numero = Number(lines.shift())

        if(numero > 0){
            qtd_pares++
        }
    }

    console.log(`${qtd_pares} valores positivos`)


} main()