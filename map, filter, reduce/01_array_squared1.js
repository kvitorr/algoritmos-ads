
//Creating reusable function
function array_squared(array){
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index] ** 2
    }
    return array
} 

const array = [1, 2, 3, 4, 5, 6]
console.log(array_squared(array))




// Using built-in functions
array.map(element => element ** 2)
console.log(array)