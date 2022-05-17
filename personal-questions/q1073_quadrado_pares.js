import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    const numero = Number(lines.shift())
    let contador = 1

    while(contador <= numero){

        if(ehPar(contador)){
            console.log(`${contador}^2 = ${contador*contador}`)
        }
        contador++
    }
} 

const ehPar = (n1) => {return ((n1 % 2) === 0)}


main()