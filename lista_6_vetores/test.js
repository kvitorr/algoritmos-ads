import { new_vector } from "./vetor_functions.js"

new_vector

const a = [1, 2, 3, 4, 5]

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

const b = retira_elemento(a, 2)

console.log(b)