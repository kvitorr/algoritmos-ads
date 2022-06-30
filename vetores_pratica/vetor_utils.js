
import { get_number_inside_range } from "./utils.js";

// Receber numeros inteiros aleatorios dentro de uma faixa
function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min)
}

//Preencher vetor com números aleatórios dentro de uma faixa:
export function get_vetor_numeros_aleatorios(tamanho, limite_inferior, limite_superior) {
    const vetor = new Array(tamanho)

    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = getRandomArbitrary(limite_inferior, limite_superior)
    }
    return vetor
}

//Preencher vetor com números definidos pelo usuário
export function get_vetor_numeros_definidos(tamanho, limite_inferior, limite_superior) {

    const vetor = new Array(tamanho)

    for (let i = 0; i < vetor.length; i++) {
        console.log(`Vetor[${i}]: `)
        vetor[i] = get_number_inside_range(limite_inferior, limite_superior)
    }
    return vetor

}


//Maior e menor elemento de um vetor
export function maior_elemento_vetor(vetor) {

    let maior_elemento = vetor[0]
    let index_maior_elemento = 0

    for (let i = 0; i < vetor.length; i++) {

        if (vetor[i] > maior_elemento) {
            maior_elemento = vetor[i]
            index_maior_elemento = i
        }
    }
    return [index_maior_elemento, maior_elemento]
}

export function menor_elemento_vetor(vetor) {

    let menor_elemento = vetor[0]
    let index_menor_elemento = 0

    for (let i = 0; i < vetor.length; i++) {

        if (vetor[i] < menor_elemento) {
            menor_elemento = vetor[i]
            index_menor_elemento = i
        }
    }
    return [index_menor_elemento, menor_elemento]
}

export function media_elementos_vetor(vetor) {

    const tamanho = vetor.length
    let soma = 0

    for (let i = 0; i < tamanho; i++) {

        soma += vetor[i]

    }

    const media = soma / tamanho

    return media.toFixed(2)
}

export function somatorio_elementos_vetor(vetor) {

    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma
}

export function filtra_elementos_positivos(vetor) {

    let vetor_positivos = []

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 0) {
            vetor_positivos.push(vetor[i])
        }
    }
    return [vetor_positivos, vetor_positivos.length]
}

export function filtra_elementos_negativos(vetor) {

    let vetor_negativos = []

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            vetor_negativos.push(vetor[i])
        }
    }
    return [vetor_negativos, vetor_negativos.length]
}


export function get_elementos_multiplicados(vetor, valor){

    for (let index = 0; index < vetor.length; index++) {
        vetor[index] *= valor 
    }
}


export function get_elementos_divididos(vetor, valor){

    for (let index = 0; index < vetor.length; index++) {
        vetor[index] /= valor 
    }
}

export function get_elementos_elevado_a_potencia(vetor, valor){

    for (let index = 0; index < vetor.length; index++) {
        vetor[index] **= valor 
    }
}

export function change_negatives_elements(vetor, inicio, fim){

    console.log()
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0){
            vetor[i] = getRandomArbitrary(inicio, fim)
        }
    }
}

export function insertion_sort(array){
    let atual 
    let j

    for (let i = 1; i < array.length; i++) {
        atual = array[i]
        j = i - 1

        while(j >= 0 && atual < array[j]) {
            array[j+1] = array[j]
            j--
        }
        array[j+1] = atual
    }
    return array
}

export function embaralhar_array(arr) {
    let j
    let intermediario
    
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        
        intermediario = arr[i]
        arr[i] = arr[j]
        arr[j] = intermediario
    }
    return arr
}

