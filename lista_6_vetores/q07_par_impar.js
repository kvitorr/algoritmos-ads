import { eh_par, get_number } from "./utility.js"
import { new_vector, new_vector_fill_string } from "./vetor_functions.js"


function main(){

    const n = get_number('N: ')
    const vetor1 = new_vector_fill_string(n)

    const vetor2 = preenchimento_vetor_paridade(vetor1)

    console.log(`Vetor original: [${vetor1.join(', ')}]`)
    console.log(`Vetor modificado: [${vetor2.join(', ')}]`)

} 

function preenchimento_vetor_paridade(vetor){

    let vetor_modificado = new_vector(vetor.length, "")
    for(let index = 0; index < vetor.length; index += 1){
        
        if(eh_par(index)){
            vetor_modificado[index] = 0
        } else {
            vetor_modificado[index] = 1
        }
    }
    return vetor_modificado
}

main()
