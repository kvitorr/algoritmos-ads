//Creating function
function sum_positive_number(array){
    
    let soma = 0

    for (let i = 0; i < array.length; i++) {

        if(array[i] > 0) soma += array[i]
    }
    return soma
}

const array = [ 1, -4, 12, 0, -3, 29, -150];

console.log(sum_positive_number(array))





//=========================================================
//Creating reusable function
function only_positive_elements(array){
    const array1 = []

    for (let index = 0; index < array.length; index++) {
        if(array[index] > 0) array1.push(array[index])       
    }

    return array1
}

function sum_elements(array){
    let sum = 0

    for (let index = 0; index < array.length; index++) {
        sum += array[index]        
    }

    return sum
}

console.log(sum_elements(only_positive_elements(array)))





//=========================================================
// Using built-in functions
console.log(array.filter(x => x > 0).reduce((accumulator, element) => accumulator + element, 0))
