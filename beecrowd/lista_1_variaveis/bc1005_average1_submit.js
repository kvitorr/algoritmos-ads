import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1005_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    
    //Entradas
    const A = Number(lines[0])
    const B = Number(lines[1])

    //Processamento
    const media = ((A * 3.5)+(B * 7.5))/11

    //Saída
    console.log(`MEDIA = ${media.toFixed(5)}`)
}

main()