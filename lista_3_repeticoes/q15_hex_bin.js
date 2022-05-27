import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const decimalNumber = Number(input('Digite um número: '))

    console.log(`\tBinário: ${decToBin(decimalNumber)}`)
    console.log(`\tHexadecimal: ${decToHex(decimalNumber)}`)
} 

function decToBin(decimalNumber){
    let binary = "" 
    let decimalNumberAtt = decimalNumber

    binary += (decimalNumberAtt%2).toString()

    while((Math.trunc(decimalNumberAtt/2) !== 0)){
        
        decimalNumberAtt = Math.trunc(decimalNumberAtt/2)
        binary += (decimalNumberAtt%2).toString()
    }

    const intermediario = binary.split("")
    const reverse = intermediario.reverse().join('')

    return reverse

} 


function decToHex(decimalNumber){
    let hexadec = "" 
    let decimalNumberAtt = decimalNumber

    if(isMoreThanNine(decimalNumberAtt%16)){
        hexadec += whatLetterHexadec(decimalNumberAtt%16)
    } else {
        hexadec += (decimalNumberAtt%16).toString()
    }

    while((Math.trunc(decimalNumberAtt/16) !== 0)){
        
        decimalNumberAtt = Math.trunc(decimalNumberAtt/16)
        
        if(isMoreThanNine(decimalNumberAtt%16)){
            hexadec += whatLetterHexadec(decimalNumberAtt%16)
        } else {
            hexadec += (decimalNumberAtt%16).toString()

        }
    }

    const intermediario = hexadec.split("")
    const reverse = intermediario.reverse().join('')

    return reverse
} 

function whatLetterHexadec(n1){
    if(n1 === 10){
        return "A"
    } else if (n1 === 11){
        return 'B'
    } else if (n1 === 12){
        return 'C'
    } else if (n1 === 13){
        return 'D'
    } else if (n1 === 14){
        return 'E'
    } else if (n1 === 15){
        return "F"
    }
}

const isMoreThanNine = (n1) => {return n1 > 9}

main()