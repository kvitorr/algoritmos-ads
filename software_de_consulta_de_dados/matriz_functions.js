//Colocar matriz em ordem decrescente
export function matrix_descending_order(matriz, column_number){

    let matriz_decrescente = new Array(matriz.length)
    const tamanho_elementos = matriz[0].length

    for (let i = 0; i < matriz_decrescente.length; i++) {
        matriz_decrescente[i] = new Array(tamanho_elementos)
    }

    let index
    let elemento
    const tamanho_matriz_original = matriz.length

    for(let i = 0; i < tamanho_matriz_original; i += 1){

        [index, elemento] = maior_elemento(matriz, column_number);
        matriz_decrescente[i] = matriz[index]
        matriz = retira_elemento(matriz, index)

    }
    return matriz_decrescente
}

// Retirar elemento
export function retira_elemento(matriz, index){

    const tamanho_nova_matriz = matriz.length - 1 
    const tamanho_elementos = matriz[0].length

    let matriz_modificada = new Array(tamanho_nova_matriz)
    
    for (let i = 0; i < matriz_modificada.length; i++) {
        matriz_modificada[i] = new Array(tamanho_elementos)
    }


    let new_index = 0

    for(let i = 0; i < matriz.length; i += 1){

        if(i !== index){
            matriz_modificada[new_index] = matriz[i]
            new_index++
        }

    }
    return matriz_modificada
}

//Retorna o maior elemento do vetor
export function maior_elemento(matriz, column_number){

    let maior_elemento_number = matriz[0][column_number]
    let index_maior_elemento = 0
    let maior_elemento

    for(let i = 0; i < matriz.length; i++){

        if(matriz[i][column_number] > maior_elemento_number){

            maior_elemento = matriz[i]
            maior_elemento_number = matriz[i][column_number]
            index_maior_elemento = i

        }
    }
    return [index_maior_elemento, maior_elemento]
}
