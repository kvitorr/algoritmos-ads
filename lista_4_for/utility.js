

// Função de leitura de strings
import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

//Função de leitura de números

export function get_number(o_que){
    const numero = Number(input(`${o_que}`))
    return numero
}

//Múltiplos, primos, paridade

export const eh_multiplo = (numero, n) => {return (numero % n) === 0}
export const eh_par = (numero) => {return (numero % 2) === 0}
export const eh_impar = (numero) => {return !((numero % 2) === 0)}

export function numero_primo(n1){

    if(n1 === 1) {
        return false

    } else if (n1 === 2 || n1 === 3 || n1 === 5 || n1 === 7) {
        return true

    } else if ( ((n1 % 2) !== 0) && ((n1 % 3) !== 0) && ((n1 % 5) !== 0) && (((n1 % 7) !== 0)) ){
        return true

    } else {
        return false
    }
}

