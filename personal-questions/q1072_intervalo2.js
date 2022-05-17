import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    const n_casos = Number(lines.shift())
    let contador = 0
    let numero = 0
    let dentro = 0
    let fora = 0

    while(contador < n_casos){
        numero = Number(lines.shift())

        if(numero <= 20 && numero >=10){
            dentro++
        } else {
            fora++
        }
        contador++
    }

console.log(`${dentro} in`)
console.log(`${fora} out`)



} main()