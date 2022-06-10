import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1006_input.txt', 'utf8')
const lines = input.split('\n')

function main() {

    //Entradas
    const A = Number(lines[0])
    const B = Number(lines[1])
    const C = Number(lines[2])

    //Processamento
    const media = ((A * 2)+(B * 3)+(C * 5))/10

    //Saída
    console.log(`MEDIA = ${media.toFixed(1)}`)
}

main()