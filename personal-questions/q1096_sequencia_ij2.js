import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    let i = 1
    let j = 7

    
    for(let i = 1; i <= 9; i = i + 2){

        for(let j = 7; j >= 5; j--){

            console.log(`I=${i} J=${j}`)
        }
    }
} main()