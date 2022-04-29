import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1002_input.txt', 'utf8')
const lines = input.split('\n')


function main(){

        //Entrada
        const r = Number(lines[0])

        //Processamento
        const n = 3.14159
        const area = n * (r**2)

        //Saída
        console.log(`A=${area.toFixed(4)}`)
}

main()