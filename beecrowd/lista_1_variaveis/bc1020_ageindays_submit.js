import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1020_input.txt', 'utf8')
const lines = input.split('\n')

function main() {

    //Entrada
    const integer_value = lines[0]

    //Processamento
    
    const years = Math.trunc(integer_value/365)
    const remainder_years = integer_value%365

    const mounth = Math.trunc(remainder_years/30)
    const days = remainder_years%30

    //Saída
    console.log(`${years} ano(s)\n${mounth} mes(es)\n${days} dia(s)`)
}

main()