import { get_number } from "./utility.js";
import { new_vector_fill_string, vetor_contains_element } from "./vetor_functions.js";

function main(){
    
    console.log('\n== Primeiro Vetor ==')
    const a = get_number('Quantidade de elementos: ')
    const vetorA = new_vector_fill_string(a)
    
    console.log('\n== Segundo Vetor ==')
    const b = get_number('Quantidade de elementos: ')
    const vetorB = new_vector_fill_string(b)

    const vetorC = uniao_vetores(vetorA, vetorB)
    const vetorD = interseccao_vetores(vetorA, vetorB, vetorC)

    console.log(`\tConjunto União: [${vetorC.join(', ')}]`)
    console.log(`\tConjunto Intersecção: [${vetorD.join(', ')}]`)


} 

function uniao_vetores(vetor1, vetor2){

    let elemento 
    let vetor_uniao = [""]

    for(let i = 0; i < vetor1.length; i++){

        elemento = vetor1[i]

        if(!vetor_contains_element(vetor_uniao, elemento)){
            vetor_uniao.push(elemento)
        }
    }
        
    for(let j = 0; j < vetor2.length; j++){

        elemento = vetor2[j]

        if(!vetor_contains_element(vetor_uniao, elemento)){
            vetor_uniao.push(elemento)
        }
    }
    vetor_uniao.shift()
    return vetor_uniao
}

function interseccao_vetores(vetor1, vetor2, vetor_uniao){

    let elemento 
    let vetor_interseccao = [""]

    for(let index = 0; index < vetor_uniao.length; index++){

        elemento = vetor_uniao[index]

        if(vetor_contains_element(vetor1, elemento) && vetor_contains_element(vetor2, elemento)){

            if(!vetor_contains_element(vetor_interseccao, elemento)){
                vetor_interseccao.push(elemento)
            }
        }
    }

    vetor_interseccao.shift()
    return vetor_interseccao
}


main()