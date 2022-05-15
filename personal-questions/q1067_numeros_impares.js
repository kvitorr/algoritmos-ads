import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')


function main(){

    let numero = Number(lines[0])
    const condicao = ((numero >= 1) && (numero <= 1000))

    let n = 1

    while(condicao && (n <= numero)){
        
        if(ehImpar(n)){
            console.log(n)
        }
        n++
    }
} 

const ehImpar = (n1) => {return !(n1 % 2 === 0)}


main()