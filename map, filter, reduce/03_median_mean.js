//Creating reusable functions
function mean(array){

    const array_length = array.length
    const index = Math.floor(array_length/2)    

    return array[index]

}                 

function media(array){

    const qtd_de_elementos = array.length 
    let soma = 0

    for (let i = 0; i < array.length; i++) {

        soma += array[i]
    }

    return soma/qtd_de_elementos
}

const input = [12, 46, 32, 64];
console.log(mean(input))
console.log(media(input))



//========================================================
//Using built-in functions

function get_sum_all_number(array){
    const sum_elements = array.reduce((accumulator, element) => accumulator + element, 0)
    
    return sum_elements
}

function media1(array){

    const sum_elements = get_sum_all_number(array)
    const tamanho = array.length

    const media2 = sum_elements/tamanho

    return media2
}


console.log(media1(input))


//mean???, não sei como fazer 

