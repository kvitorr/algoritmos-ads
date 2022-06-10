import fs from 'fs'
const lines = fs.readFileSync('./input/q1174_selecao_em_vetor_i.txt', 'utf-8').split('\r\n')

function main(){

    const vetor = new Array(100)
    const vetor_preenchido = preencher_vetor(vetor)


    for (let index = 0; index < vetor_preenchido.length; index++) {
        if(vetor_preenchido[index] <= 10){
            console.log(`A[${index}] = ${vetor_preenchido[index]}`)
        }
    }

} 

function preencher_vetor(vetor){

    const tamanho = vetor.length

    for (let index = 0; index < tamanho; index++) {
        vetor[index] = Number(lines[index]) 
    }

    return vetor
}

main()