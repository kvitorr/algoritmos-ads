import { get_number } from "./utility.js";
import { new_vector_fill_string, there_is_equal_elements } from "./vetor_functions.js";


function main(){

    const n = get_number('N: ')
    const vetorA = new_vector_fill_string(n)

    if(there_is_equal_elements(vetorA) > 0){
        console.log('\tExistem elementos iguais')
    } else {
        console.log('\tNão existem elementos iguais')
    }


} main()