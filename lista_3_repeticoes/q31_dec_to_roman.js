import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const decimal = input('Número: ')

    const [c, d, u] = digits(decimal)
    
    let romanNumber = romanNumbers(c, "C", "D", "M") + romanNumbers(d, "X", "L", "C" ) + romanNumbers(u, "I", "V", "X") 
    
    console.log(`\t ${romanNumber}`)

} 

const threeDigits = (decimal) => {return (decimal > 99 && decimal < 1000)}
const twoDigits = (decimal) => {return decimal > 9 && decimal < 100}
const oneDigit = (decimal) => {return decimal >= 0 && decimal < 10}

function romanNumbers(c, C, D, M ){

    let contador = 0
    let result = ""


    if(c <= 3){

        while(contador < c){
            result += `${C}`
            contador++
        }

    } else if(c < 5) {
        result = `${C}` + `${D}`
    } else if (c === 5){
        result = `${D}`
    } else if (c > 5 && c <=8 ){
        
        result = `${D}`
        while(contador < (c - 5)){
            result += `${C}`
            contador++
        }
    } else if (c > 8 && c < 10){
        result = `${C}` + `${M}`
    }

    return result
}


function digits(decimal){

    let c = 0
    let d = 0
    let u = 0
    
    if(threeDigits(Number(decimal))){
        [c, d, u] = decimal.split('').map(Number)
        return [c, d, u]

    } else if (twoDigits(Number(decimal))){
        [d, u] = decimal.split('').map(Number)
        return [c, d, u]

    } else if (oneDigit(Number(decimal))){
        u = Number(decimal)
        return [c, d, u]
    }
}



main()