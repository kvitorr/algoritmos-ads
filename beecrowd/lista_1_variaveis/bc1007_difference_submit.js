import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1007_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    
    const A = Number(lines[0])
    const B = Number(lines[1])
    const C = Number(lines[2])
    const D = Number(lines[3])

    const DIFERENCA = ((A * B) - (C * D))

    console.log(`DIFERENCA = ${DIFERENCA}`)
}

main()