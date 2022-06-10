import fs from 'fs'
const lines = fs.readFileSync('./input/q1173_preenchimento_de_vetor_i.txt', 'utf-8').split('\r\n')

function main(){

    const n = Number(lines[0])
    const vetor = new Array(10)

    const vetor_modificado = preenchimento_do_vetor(vetor, n)

    printa_vetor(vetor_modificado)

} 

function preenchimento_do_vetor(vetor, n){

    vetor[0] = n

    let elemento = n

    for (let index = 1; index < vetor.length; index++) {
        elemento *= 2
        vetor[index] = elemento
    }
    return vetor
}

function printa_vetor(vetor){
    for (let index = 0; index < vetor.length; index++) {
        console.log(`N[${index}] = ${vetor[index]}`)        
    }
}

main()