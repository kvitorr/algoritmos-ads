import fs from 'fs'
const lines = fs.readFileSync('./input/q1175_troca_em_vetor_i.txt', 'utf-8').split('\r\n')

function main(){

    const vetor = new Array(20)

    const vetor_preenchido = preencher_vetor(vetor)

    const vetor_modificado = substituir_vetor(vetor_preenchido)

    printa_vetor(vetor_modificado)    

} 

function preencher_vetor(array){

    for (let index = 0; index < array.length; index++) {
        array[index] = Number(lines[index])
    }

    return array
}

function substituir_vetor(vetor){

    let ultimo_index = vetor.length - 1

    const vetor_invertido = new Array(vetor.length)

    let i = 0

    for (let index = ultimo_index; index >= 0; index--) {
        vetor_invertido[i] = vetor[index]
        i++
    }

    return vetor_invertido
}

function printa_vetor(vetor){
    for (let index = 0; index < vetor.length; index++) {
        console.log(`N[${index}] = ${vetor[index]}`)        
    }
}

main()