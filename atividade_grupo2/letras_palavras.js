
import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const frase = input('Frase: ')
    const vetor_frase = frase.split(' ')

    const cont_par = get_qtd_de_elementos_pares(vetor_frase)
    const cont_impar = get_qtd_de_elementos_impares(vetor_frase)

    const cont_caracteres = get_qtd_de_caracteres(vetor_frase)

    console.log(`Quantidade de palavras impares: ${cont_impar}`)
    console.log(`Quantidade de palavras pares: ${cont_par}`)
    console.log(`Quantidade de caracteres: ${cont_caracteres}`)
} 

function eh_par(number){
    return (number % 2) === 0
}

function eh_impar(number){
    return !eh_par(number)
}


function get_qtd_de_elementos_pares(vetor){

    let tamanho_elemento
    let cont_par = 0

    for (let i = 0; i < vetor.length; i++) {
       
        tamanho_elemento = vetor[i].length
        if(eh_par(tamanho_elemento)){
            cont_par++
        }    
    }
    return cont_par
}

function get_qtd_de_elementos_impares(vetor){

    let tamanho_elemento
    let cont_impar = 0

    for (let i = 0; i < vetor.length; i++) {
       
        tamanho_elemento = vetor[i].length
        if(eh_impar(tamanho_elemento)){
            cont_impar++
        }   
    }
    return cont_impar
}

function get_qtd_de_caracteres(vetor){

    let cont_caracteres = 0

    for (let i = 0; i < vetor.length; i++) {
        cont_caracteres += vetor[i].length
    }
    return cont_caracteres
}


main()