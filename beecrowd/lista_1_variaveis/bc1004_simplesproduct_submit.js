import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1004_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    
        //Entrada do Raio
        const A = lines[0]
        const B = lines[1]

        //Processamento
        const PROD = A * B

        
        //Saída
        console.log(`PROD = ${PROD}`)

}

main()