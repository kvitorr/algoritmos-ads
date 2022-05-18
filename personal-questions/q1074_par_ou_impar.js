import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    const qtdNumeros = Number(lines.shift())
    let contador = 0
    let numeros = 0
    let resultado = ""

    while(contador < qtdNumeros){

        numeros = Number(lines.shift())

        if(numeros === 0){
            resultado = "NULL"
        } else if (ehPar(numeros)){
            resultado = "EVEN "
        } else {
            resultado = "ODD "
        }

        if(numeros === 0){

        } else if (numeros < 0){
            resultado += "NEGATIVE"
        } else {
            resultado += "POSITIVE"
        }

        console.log(resultado)
        resultado = ""
        contador++
    }
} 

const ehPar = (n1) => {return ((n1 % 2) === 0)}

main()