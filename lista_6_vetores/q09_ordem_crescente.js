import { get_number } from "./utility.js"
import { new_vector_fill_number, vetor_ascending_order } from "./vetor_functions.js"



function main(){
    const n = get_number('N: ')
    let vetor = new_vector_fill_number(n)

    const vetor_ordem_crescente = vetor_ascending_order(vetor)

    console.log(`Vetor original: [${vetor.join(', ')}]`)
    console.log(`Vetor ordenado: [${vetor_ordem_crescente.join(', ')}]`)
    
} main()