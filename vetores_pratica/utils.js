import fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()

export function load_vector(local_arquivo, caractere_separacao) {
    const vector = fs.readFileSync(local_arquivo, 'utf-8').split(caractere_separacao)

    return vector
}

//Receber número
export function get_number(string) {

    let number = Number(input(`${string}`))

    while(!eh_numero(number)){
       number = Number(input('Por favor, digite um número: '))
    }

    return Number(number)
}

function eh_numero(numero){
    return !(isNaN(Number(numero)))
}

// Receber número positivo

export function get_positive_number(string) {
    let number = Number(input(`${string}`))

    while (number <= 0) {
        number = get_number('Por favor, digite um número positivo: ')
    }
    return Number(number)
}

//Receba número negativos
export function get_negative_number(string) {
    let number = get_number(`${string}`)

    while (number >= 0) {
        number = get_number('Por favor, digite um número negativo: ')
    return Number(number)
    }
}

//Receba números dentro de uma faixa

export function get_number_inside_range(limite_inferior, limite_superior) {
    let number = get_number(`Digite um número dentro da faixa: [${limite_inferior},${limite_superior}]: `)

    while (number < limite_inferior || number > limite_superior) {
        number = get_number(`Por favor, digite um número dentro da faixa: [${limite_inferior},${limite_superior}]: `)
    }
    return Number(number)
}


