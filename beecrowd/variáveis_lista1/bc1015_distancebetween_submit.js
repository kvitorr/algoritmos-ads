import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1015_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    const c1 = lines[0]
    const c2 = lines [1]

    const pic1 = c1.split(" ")
    const pic2 = c2.split(" ")

    const x1 = Number(pic1[0])
    const y1 = Number(pic1[1])

    const x2 = Number(pic2[0])
    const y2 = Number(pic2[1])

    const d1 = (x2-x1)**2
    const d2 = (y2-y1)**2
    const d3 = d1 + d2


    
    console.log(`${Math.sqrt(d3).toFixed(4)}`)
}

main()