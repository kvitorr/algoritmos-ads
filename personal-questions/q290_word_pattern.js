import prompt from "prompt-sync";
const input = prompt()



function main(){

    const pattern = input('Pattern: ')

    const s = input('S: ')

    const vector_pattern = get_vector_pattern(pattern, '')

    const vector_s = get_vector_pattern(s, ' ')

    const result = is_equal_vector(vector_pattern, vector_s)

    console.log(result)


} 

function get_vector_pattern(pattern, caractere){

    const vector = pattern.split(caractere)
    const vector2 = new Array(vector.length)

    const elementos = get_elementos_sem_repeticoes(vector)

    for (let i = 0; i < elementos.length; i++) {
        
        for (let j = 0; j < vector.length; j++) {
            
            if(elementos[i] === vector[j]){
                vector2[j] = i
            }

        }
    }
    return vector2
}

function get_elementos_sem_repeticoes(vetor){
    let elementos = []

    for (let i = 0; i < vetor.length; i++) {
        
        if(!contains(vetor[i], elementos)){
            elementos.push(vetor[i])
        }        
    }
    return elementos
}

function contains(element, vetor){

    for(let element1 of vetor){
        if(element === element1){
            return true
        }
    }
    return false
}

function is_equal_vector(vetor1, vetor2){

    for (let index = 0; index < vetor1; index++) {

        if(vetor1[index] !== vetor2[index]){
            return false
        }
    }
    return true
}


main()