//push
export function push_method(vetor, elemento){

    const vetor2 = new_vector(vetor.length + 1)

    for (let i = 0; i < vetor.length; i++) {
        vetor2[i] = vetor[i]
    }

    vetor2[vetor.length] = elemento
    return vetor2
}

//===================================================



export function new_vector(tamanho){
    return new Array(tamanho)
}

//Ordena vetor em ordem decrescente
export function vetor_descending_order(vetor){

    let vetor_crescente = new Array(vetor.length)
    let elemento
    let index

    const tamanho_vetor_original = vetor.length

    for(let i = 0; i < tamanho_vetor_original; i += 1){
        [index, elemento] = maior_elemento(vetor);
        vetor_crescente[i] = vetor[index]
        vetor = retira_elemento(vetor, index)
    }
    vetor_crescente
    return vetor_crescente
}

// Retirar elemento
export function retira_elemento(vetor, index){

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

//Retorna o maior elemento do vetor
export function maior_elemento(vetor){

    let maior_elemento = vetor[0]
    let index_maior_elemento = 0

    for(let i = 0; i < vetor.length; i++){

        if(vetor[i] > maior_elemento){
            maior_elemento = vetor[i]
            index_maior_elemento = i
        }
    }
    return [index_maior_elemento, maior_elemento]
}



