import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1009_input.txt', 'utf8')
const lines = input.split('\n')


function main() {
    const A = Number(lines[0])
    const B = Number(lines[1])
    const C = Number(lines[2])

    const salarioFinal = B + ( 0.15 * C)

    console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`)
}

main()