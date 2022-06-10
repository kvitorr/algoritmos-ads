import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1016_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    
    const distancia = lines[0]

    const tempoGasto = distancia * 2

    console.log(`${tempoGasto} minutos`)
}

main()