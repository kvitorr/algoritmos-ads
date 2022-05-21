import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    let i = 1
    let j = 60

    while(j >= 0){

        console.log(`I=${i} J=${j}`)
        i += 3
        j -=5
    }
} main()