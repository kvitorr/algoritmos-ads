import { new_vector_fill_string } from "./vetor_functions.js";
import { get_number } from "./utility.js";

function main(){

    console.log('\n== Primeiro Vetor ==')
    const a = get_number('Quantidade de elementos: ')
    const vetorA = new_vector_fill_string(a)
    
    console.log('\n== Segundo Vetor ==')
    const b = get_number('Quantidade de elementos: ')
    const vetorB = new_vector_fill_string(b)

    const vetorC = concatenar_dois_vetores(vetorA, vetorB)


    console.log(`\nVetor A = [${vetorA.join(', ')}]`)
    console.log(`Vetor B = [${vetorB.join(', ')}]`)
    console.log(`Vetor concatenado: [${vetorC.join(', ')}]`)

} 

function concatenar_dois_vetores(vetor1, vetor2){

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




main()