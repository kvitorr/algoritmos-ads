import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1013_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    const entr = lines[0]

    const entradaCortada = entr.split(" ")

    const a = Number(entradaCortada[0])
    const b = Number(entradaCortada[1])
    const c = Number(entradaCortada[2])


    const maiorAB = (a+b+Math.abs(a-b))/2

    const d = maiorAB

    const maiorABC = (d+c+Math.abs(d - c))/2


   console.log(`${maiorABC} eh o maior`)
}

main()