import prompt from "prompt-sync"
const input = prompt()

//Criar vetor com valor padrão

export function new_vector(quantidade_de_elementos, valor_padrao){

    const vetor = new Array(quantidade_de_elementos).fill(valor_padrao)

    return vetor
}

//Inverter vetor

export function vector_inverter(vetor){

    const vetorb = new Array(vetor.length)
    const ultimo_index = vetor.length - 1

    let j = 0
    for(let index = ultimo_index; index >= 0; index -= 1){

        vetorb[j] = vetor[index]

        j++
    }

    return vetorb
}

//Criar e preencher vetor com valores

export function new_vector_fill_string(quantidade_de_elementos){

    const vetor = new Array(quantidade_de_elementos)

    for(let i = 0; i < quantidade_de_elementos; i++){
        vetor[i] = input(`[${i}] = `)
    }

    return vetor

}

export function new_vector_fill_number(quantidade_de_elementos){

    const vetor = new Array(quantidade_de_elementos)

    for(let i = 0; i < quantidade_de_elementos; i++){
        vetor[i] = Number(input(`[${i}] = `))
    }

    return vetor

}

// Verifica se existem elementos iguais

export function there_is_equal_elements(vetor){

    let qtd_elementos_iguais = 0

    for(let i = 0; i < vetor.length; i++){


        for(let j = i + 1; j < vetor.length; j++){

            if(vetor[i] === vetor[j]){
                qtd_elementos_iguais++
            }
        }
    }

    return qtd_elementos_iguais

}

// Vetor contém um determinado elemento?

export function vetor_contains_element(vetor, element){

    for(let elements of vetor){
        if(element === elements){
            return true
        }
    }
    return false
}

//Concatenar dois vetores

export function concatenar_dois_vetores(vetor1, vetor2){

    const tamanho_vetor3 = Number(vetor1.length) + Number(vetor2.length)
    const vetor3 = new Array(tamanho_vetor3)

    let contador = 0
    
    for(let i = 0; i < vetor1.length ; i++){

        vetor3[contador] = vetor1[i]
        
        contador++
    }

    for(let j = 0; j < vetor2.length; j++){

        vetor3[contador] = vetor2[j]
        
        contador++

    }

    return vetor3

}


//Maior e menor elemento de um vetor

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

export function menor_elemento(vetor){

    let menor_elemento = vetor[0]
    let index_menor_elemento = 0

    for(let i = 0; i < vetor.length; i++){

        if(vetor[i] < menor_elemento){
            menor_elemento = vetor[i]
            index_menor_elemento = i
        }
    }
    return [index_menor_elemento, menor_elemento]
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


//Colocar vetor em ordem crescente

export function vetor_ascending_order(vetor){

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

//Colocar vetor em ordem decrescente

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

