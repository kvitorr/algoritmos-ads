import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    let numero = Number(lines.shift())
    let contador = 0

    while(contador < 6){
        if(!ehPar(numero)){
            console.log(numero)
            contador++
        }

        numero++
    }

} 

const ehPar = (n1) => {return ((n1 % 2) === 0)}

main()