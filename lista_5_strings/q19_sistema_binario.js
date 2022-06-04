//Converta um numero do sistema binário, dado como uma cadeia de zeros e uns, para o sistema decimal de numeração.

import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const binario = input('Binário: ')

    const decimal = binary_to_decimal(binario)

    console.log(`\tO número binário ${binario} é equivalente a ${decimal}`)

} 

function binary_to_decimal(binario){

    const qtd_de_bits = binario.length

    const binario_invertido = inverter_string(binario)

    let decimal = 0

    for(let index = 0; index < qtd_de_bits; index += 1){
    
        decimal += Number(binario_invertido[index]) * (2 ** index)

    }

    return decimal
}

function inverter_string(string){

    let ultimo_index = string.length - 1
    let string_invertida = ""

    for(let i = ultimo_index; i >= 0; i -= 1 ){

        string_invertida += string[i]
    }

    return string_invertida
}


main()