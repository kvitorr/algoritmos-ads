import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1011_input.txt', 'utf8')
const lines = input.split('\n')


function main() {
    
    const r = lines[0]
    const pi = 3.14159

    const volume = (4.0/3)*pi*(r**3)

    console.log(`VOLUME = ${volume.toFixed(3)}`)
}

main()