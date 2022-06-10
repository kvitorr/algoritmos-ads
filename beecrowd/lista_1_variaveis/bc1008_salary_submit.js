import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1008_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    const A = Number(lines[0])
    const B = Number(lines[1])
    const C = Number(lines[2])

    const salario = B * C

    console.log(`NUMBER = ${A}`)
    console.log(`SALARY = U$ ${salario.toFixed(2)}`)
}

main()