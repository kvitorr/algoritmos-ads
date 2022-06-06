import { get_number, input } from "./utility.js";

function main(){

    const n = get_number('N: ')
    
    const vetor_n_numeros = vetor_de_N_numeros(n)
    const tamanho_vetor = vetor_n_numeros.length

    const soma = soma_dos_numeros(vetor_n_numeros)

    const media = media_dos_numeros(soma, tamanho_vetor)

    console.log(`Soma: ${soma.toFixed(2)}. Media: ${media.toFixed(2)}`)

} 

function vetor_de_N_numeros(n){

    let vetor = ""
    let numero = 0

    for(let i = 0; i < n; i += 1){

        numero = get_number('Digite um número: ')

        if(i !== (n - 1)) vetor += String(numero) + " "
        else vetor += String(numero)

    }

    return vetor.split(' ').map(Number)

}

function soma_dos_numeros(vetor){

    const tamanho_vetor = vetor.length
    let soma = 0

    for(let currentIndex = 0; currentIndex < tamanho_vetor; currentIndex += 1){

        soma += vetor[currentIndex]
    }
    return soma
}

function media_dos_numeros(soma, qtd_de_itens){
    const media = soma/qtd_de_itens
    return media
}


main()