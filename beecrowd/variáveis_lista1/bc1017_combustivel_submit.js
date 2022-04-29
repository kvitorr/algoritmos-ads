import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1017_input.txt', 'utf8')
const lines = input.split('\n')

function main(){
    
        const tempo = lines[0]

        const vel = lines[1]

        const dist = tempo * vel

        const litros = dist / 12

        console.log(`${litros.toFixed(3)} `)

}

main()