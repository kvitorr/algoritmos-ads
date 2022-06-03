//Leia uma string no formato hh:mm:ss e escreva o resultado na seguinte forma: “hh hora(s), mm minuto(s) e ss segundo(s)”.


import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const horario = input('hh:mm:ss: ')
    const caractere = input('Quebrar no caractere: ')

    const [horas, minutos, segundos] = dividir(horario, caractere)

    console.log(`\t${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s) `)

} 

function dividir(string, caractere){
    
    let inicio = 0
    let tamanho_string = string.length

    let palavra = ""

    const quantidade_de_repeticoes = caractere_repete_quantas_vezes(string, caractere)

    
    let vetor = new Array(quantidade_de_repeticoes)

    for(let i = 0; i < quantidade_de_repeticoes; i++){

        for(let j = inicio; j < tamanho_string; j += 1){

            if(string[j] === caractere){
                inicio++
                break

            } else {
                palavra += string[j]
            }
            inicio++
        }   
        vetor[i] = palavra
        palavra = ""
    }

    return vetor

}

function caractere_repete_quantas_vezes(string, caractere){

    let contador = 1

    for(let caracteres of string){

        if(caractere === caracteres){
            contador++
        }
        
    }

    return contador

}





main()