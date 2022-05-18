import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')

function main(){

    const qtdCasos = Number(lines.shift())
    let contador = 0
    let resposta = 0

    while(contador < qtdCasos){
        contador++
        resposta = lines.shift()
        
        console.log(`resposta ${contador}: ${resposta}`)

    }




} main()