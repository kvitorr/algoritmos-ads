import { get_number } from "./utility.js"
import { menor_elemento, new_vector_fill_number, new_vector } from "./vetor_functions.js"



function main(){
    const n = get_number('N: ')
    let vetor = new_vector_fill_number(n)

    const vetor_ordem_crescente = vetor_ascending_order(vetor)

    console.log(`Vetor original: [${vetor.join(', ')}]`)
    console.log(`Vetor ordenado: [${vetor_ordem_crescente.join(', ')}]`)
} 

function vetor_ascending_order(vetor){

    let vetor_crescente = new Array(vetor.length)
    let elemento
    let index

    const tamanho_vetor_original = vetor.length

    for(let i = 0; i < tamanho_vetor_original; i += 1){
        [index, elemento] = menor_elemento(vetor);
        vetor_crescente[i] = vetor[index]
        vetor = retira_elemento(vetor, index)
    }
    vetor_crescente
    return vetor_crescente
}

function retira_elemento(vetor, index){

    const tamanho_novo_vetor = vetor.length - 1

    let vetor_modificado = new_vector(tamanho_novo_vetor)

    let new_index = 0

    for(let i = 0; i < vetor.length; i += 1){

        if(i !== index){
            vetor_modificado[new_index] = vetor[i]
            new_index++
        }

    }
    return vetor_modificado
}





main()