import { new_vector_fill_string, concatenar_dois_vetores } from "./vetor_functions.js";
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

} main()