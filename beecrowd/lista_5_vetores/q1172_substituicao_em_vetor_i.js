import fs from 'fs'
const lines = fs.readFileSync('./input/q1172_substituicao_em_vetor_i.txt', 'utf-8').split('\r\n')

function main(){

    const vetor = new Array(10)

    const vetor_preenchido = preencher_vetor(vetor)

    const vetor_modificado = substituicao(vetor_preenchido)

    printa_vetor(vetor_modificado)


} 

function preencher_vetor(vetor){

    for (let index = 0; index < vetor.length; index++) {
        vetor[index] = Number(lines[index])
    }
    return vetor
}

function printa_vetor(vetor){
    for (let index = 0; index < vetor.length; index++) {
        console.log(`X[${index}] = ${vetor[index]}`)        
    }
}

function substituicao(vetor){

    let elemento

    for (let index = 0; index < 10; index++) {
        elemento = vetor[index]
        if(elemento <= 0){
            vetor[index] = 1
        }
    }

    return vetor
}

main()