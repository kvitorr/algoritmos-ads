import { get_number } from "./utility.js";

function main(){

    const n = get_number('N: ')
    
    const vetor_n_numeros = vetor_de_N_numeros(n)

    const maior = maior_numero_do_vetor(vetor_n_numeros)

    console.log(`\tLista de números: [${vetor_n_numeros.join(', ')}]. Maior: ${maior}`)

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

function maior_numero_do_vetor(vetor){

    let maior = vetor[0]
    const tamanho_vetor = vetor.length
    let currentNumber 

    for(let currentIndex = 0; currentIndex < tamanho_vetor; currentIndex += 1 ){
        
        currentNumber = vetor[currentIndex]

        if(currentNumber > maior){
            maior = currentNumber
        }

    }

    return maior

}

main()