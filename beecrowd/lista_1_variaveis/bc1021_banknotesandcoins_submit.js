import fs from 'fs';

const input = fs.readFileSync('./inputs/bc1021_input.txt', 'utf8')
const lines = input.split('\n')

function main() {

    const integer_value = lines[0]
    
    const integer_adjusted = integer_value*100

    let remainder = 0

    const notes_100 = Math.trunc(integer_adjusted/10000)
    remainder = integer_adjusted%10000

    const notes_50 = Math.trunc(remainder/5000)
    remainder = remainder%5000

    const notes_20 = Math.trunc(remainder/2000)
    remainder = remainder%2000

    const notes_10 = Math.trunc(remainder/1000)
    remainder = remainder%1000

    const notes_5 = Math.trunc(remainder/500)
    remainder = remainder%500

    const notes_2 = Math.trunc(remainder/200)
    remainder = remainder%200

    const coin_1 = Math.trunc(remainder/100)
    remainder = remainder%100

    const coin_50 = Math.trunc((remainder/50))
    remainder = remainder%50

    const coin_25 = Math.trunc(remainder/25)
    remainder = remainder%25

    const coin_10 = Math.trunc(remainder/10)
    remainder = remainder%10

    const coin_05 = Math.trunc(remainder/5)
    remainder = remainder%5

    const coin_01 = Math.trunc(remainder/1)

    console.log('NOTAS:')
    console.log(`${notes_100} nota(s) de R$ 100.00`)
    console.log(`${notes_50} nota(s) de R$ 50.00`)
    console.log(`${notes_20} nota(s) de R$ 20.00`)
    console.log(`${notes_10} nota(s) de R$ 10.00`)
    console.log(`${notes_5} nota(s) de R$ 5.00`)
    console.log(`${notes_2} nota(s) de R$ 2.00`)
    console.log('MOEDAS:')
    console.log(`${coin_1} moeda(s) de R$ 1.00`)
    console.log(`${coin_50} moeda(s) de R$ 0.50`)
    console.log(`${coin_25} moeda(s) de R$ 0.25`)
    console.log(`${coin_10} moeda(s) de R$ 0.10`)
    console.log(`${coin_05} moeda(s) de R$ 0.05`)
    console.log(`${coin_01} moeda(s) de R$ 0.01`)
}

main()