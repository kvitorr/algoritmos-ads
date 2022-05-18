import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')

function main(){

    const qtdCasos = Number(lines.shift())
    let contador = 0

    let entrada = ""

    while(contador < qtdCasos){

        entrada = lines.shift()

        if(entrada === "P=NP"){
            console.log('skipped')
        } else {
            entrada = entrada.split('+').map(Number)
            console.log(entrada[0] + entrada[1])
        }
        contador++
    }

} main()