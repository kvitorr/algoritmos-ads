import { new_vector_fill_number } from "./vetor_functions.js";

function main(){

    const n = 20
    const vetor = new_vector_fill_number(n)

    const soma = soma_especifica(vetor)
    console.log(`Soma: ${soma}`)

} 

function soma_especifica(vetor){

    let soma = 0
    let ultimo_index = vetor.length - 1

    for(let index = 0; index < 10; index += 1){
        soma += vetor[index] - vetor[ultimo_index]
        ultimo_index--
    }
    return soma
}

main()