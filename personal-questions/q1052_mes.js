import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')


function main(){

    const number = Number(lines[0]) - 1
    const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    console.log(meses[number])

} main()