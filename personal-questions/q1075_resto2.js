import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    const numero = Number(lines.shift())
    let inicio = 1


    while(inicio < 10000){

        if(resto2(inicio, numero)){
            console.log(inicio)
        }
        inicio++
    }



} 

const resto2 = (n1, n2) => {return ((n1 % n2) === 2)}


main()