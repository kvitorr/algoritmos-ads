import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1010_input.txt', 'utf8')
const lines = input.split('\n')

function main() {
    const peca1 = lines[0]
    const peca2 = lines[1]

    const p1 = peca1.split(" ")
    const p2 = peca2.split(" ")


    const pagamento = (Number(p1[1]) * Number(p1[2])) + (Number(p2[1]) * Number(p2[2]))

    console.log(`VALOR A PAGAR: R$ ${pagamento.toFixed(2)}`)
}

main()