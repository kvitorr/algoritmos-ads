import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1014_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    
    const dist = lines[0]
    const totalCombustivel = lines[1]
    const consumoMedio = dist / totalCombustivel

   console.log(`${consumoMedio.toFixed(3)} km/l`)
}

main()