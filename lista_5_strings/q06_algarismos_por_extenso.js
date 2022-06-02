//Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso.

import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const frase = input('Frase: ')

    const frase_com_algorismos_por_extenso = algarismos_por_extenso(frase)

    console.log(frase_com_algorismos_por_extenso)

} 


function algarismos_por_extenso(frase){

    let frase_modificada = ""
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


    for(let caractere of frase){

        if(vetor_contem_caractere(caractere, numeros)) frase_modificada += substitui_numero_por_extenso(caractere)
        else frase_modificada += caractere

    }

    return frase_modificada
}


function substitui_numero_por_extenso(caractere){

    const numeros_por_extenso = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]

    const index = Number(caractere)

    const numero_extenso = numeros_por_extenso[index]

    return numero_extenso
}


function vetor_contem_caractere(caractere, vetor){
    
    for(let elemento of vetor){
        if(caractere === elemento){
            return true
        }
    }
    return false
} 

main()