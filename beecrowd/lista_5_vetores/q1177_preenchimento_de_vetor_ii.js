import fs from 'fs'
const lines = fs.readFileSync('./input/q1177_preenchimento_de_vetor_ii.txt', 'utf-8').split('\r\n')

function main(){

    const t = Number(lines[0])

    const vetor = new Array(1000)

    const vetor_preenchido = preencher_sequencia(vetor, t)

    printa_vetor(vetor_preenchido)

} 

function printa_vetor(vetor){
    for (let index = 0; index < vetor.length; index++) {
        console.log(`N[${index}] = ${vetor[index]}`)        
    }
}

function preencher_sequencia(vetor, t){

    let contador = 0

    for (let index = 0; index < vetor.length; index++) {
        
        vetor[index] = contador

        contador++

        if(contador === t){
            contador = 0
        }
    }
    return vetor
}


main()