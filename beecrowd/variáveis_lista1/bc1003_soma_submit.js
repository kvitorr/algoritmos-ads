import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1003_input.txt', 'utf8')
const lines = input.split('\n')

function main(){
    
        //Entradas
        const A = Number(lines[0])
        const B = Number(lines[1])

        //Processamento
        const SOMA = A + B;

        //Saídas
        console.log(`SOMA = ${SOMA}`)
}

main()