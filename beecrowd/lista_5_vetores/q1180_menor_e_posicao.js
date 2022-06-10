import fs from 'fs'
const lines = fs.readFileSync('./input/q1180_menor_e_posicao.txt', 'utf-8').split('\r\n')

function main(){

    const n = Number(lines[0])
    const vetor = new_vector_fill_number(n)

    const [index_lower_element, lower_element] = menor_elemento(vetor)

    console.log(`Menor valor: ${lower_element}`)
    console.log(`Posicao: ${index_lower_element}`)
} 

function new_vector_fill_number(quantidade_de_elementos){

    const vetor_a = lines[1].split(' ').map(Number)

    const vetor = new Array(quantidade_de_elementos)

    for(let i = 0; i < quantidade_de_elementos; i++){
        vetor[i] = vetor_a[i]
    }

    return vetor

}

function menor_elemento(vetor){

    let menor_elemento = vetor[0]
    let index_menor_elemento = 0

    for(let i = 0; i < vetor.length; i++){

        if(vetor[i] < menor_elemento){
            menor_elemento = vetor[i]
            index_menor_elemento = i
        }
    }
    return [index_menor_elemento, menor_elemento]
}


main()