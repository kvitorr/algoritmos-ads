import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    let par = 0
    let impar = 0
    let positivo = 0
    let negativo = 0

    let numero

    let n = 0

    while( 5 > n){

        numero = Number(lines.shift())

        if (ehpar(numero)){
            par++
        } else {
            impar++
        }

        if(numero === 0){

        } else if(ehpositivo(numero)){
            positivo++
        } else if (!ehpositivo(numero)){
            negativo++
        }
        n++

    }

    console.log(`${par} valor(es) par(es)`)
    console.log(`${impar} valor(es) impar(es)`)
    console.log(`${positivo} valor(es) positivo(s)`)
    console.log(`${negativo} valor(es) negativo(s)`)
} 

const ehpar = (n1) => {return ((n1 % 2) === 0)}
const ehpositivo = (n2) => {return n2 > 0}

main()