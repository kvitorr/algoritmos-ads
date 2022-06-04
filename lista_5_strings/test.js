import prompt from 'prompt-sync'
const input = prompt()


function inverter_string(string){

    let ultimo_index = string.length - 1
    let string_invertida = ""

    for(let i = ultimo_index; i >= 0; i--){

        string_invertida += string[i]
    }
    
    return string_invertida
}

const a = inverter_string('Vitor')

console.log(a)