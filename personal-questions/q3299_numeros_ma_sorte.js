import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')

function main(){

    const numeros = lines.shift()

    if(eh13(numeros)){
        console.log(`${numeros} es de Mala Suerte`)
    } else {
        console.log(`${numeros} NO es de Mala Suerte`)
    }
    
} 

function eh13(numeros) {

    let n1 = 0
    let n2 = 0
    let concatenacao = ""

    for(let numero of numeros){

        n1 = numero
        concatenacao = n2 + n1

        if(concatenacao === "13"){
            return true
        }
        n2 = n1
    }
    return false
} main()