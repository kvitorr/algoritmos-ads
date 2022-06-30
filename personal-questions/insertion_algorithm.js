import { new_vector, vector_fill_aleatory_numbers } from "./vetor_functions.js"

function main(){

    const array = new_vector(5, 'help')
    vector_fill_aleatory_numbers(array)
    console.log(`\nArray original: [${array.join(', ')}]`)

    const array_ordenado = insertion_sort(array)
    console.log(`Array ordenado: [${array_ordenado.join(', ')}]\n`)
} 

function insertion_sort(array){
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

main()

