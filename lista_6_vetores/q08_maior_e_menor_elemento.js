import { get_number } from "./utility.js"
import { maior_elemento, menor_elemento, new_vector_fill_number } from "./vetor_functions.js"



function main(){

    const n = get_number('N: ')
    const vetor = new_vector_fill_number(n)

    const [index_bigger_element, bigger_element] = maior_elemento(vetor)
    const [index_lower_element, lower_element] = menor_elemento(vetor)

    console.log(`Maior elemento: Vetor[${index_bigger_element}] = ${bigger_element}`)
    console.log(`Menor elemento: Vetor[${index_lower_element}] = ${lower_element}`)

} main()