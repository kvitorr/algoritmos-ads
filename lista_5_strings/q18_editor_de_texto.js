//Os editores de texto possuem um recurso que permite que o usuário substitua uma sub-cadeia de um texto por outra cadeia de caracteres. Escreva um programa que realize esta ação numa frase dada.

import prompt from 'prompt-sync'
const input = prompt()



function main(){

    const frase = input('Frase: ')
    
    console.log('\n-------------------------------------------------------------------------------------------------------------')
    console.log('Para fazer a formatação do texto você deve seguir as próximas instruções: ')
    console.log('\n1. Escreva qual o inicio da cadeia de caracteres que será substituida. (Conte os indices começando do 1)')
    console.log('\t Atenção: conte a quantidade de caracteres incluindo os espaços')
    console.log('2. Escreva a frase que substituirá a string anterior')
    console.log('3. Escreva a quantidade de caracteres que serão substituidos')
    console.log('-------------------------------------------------------------------------------------------------------------\n')

    const inicio = input('Inicio: ')

    const sub_cadeia = input('Cadeia de caracteres que vai substituir: ')

    const qtd_de_carateres = Number(input('Quantidade de caracteres que serão substituidos: '))

    const nova_frase = formatted_sentence(frase, inicio, qtd_de_carateres, sub_cadeia)

    console.log(`\n\t Frase Editada: ${nova_frase}`)

} 




function formatted_sentence(string, inicio, qtd_de_carateres_substituidos, nova_string){
    
    inicio = inicio - 1
    const tamanho_string = string.length
    const tamanho_nova_string = nova_string.length

    let string_modificada = ""

    let contador_de_caracteres = 0


    


    for(let index_caractere = 0; index_caractere < inicio; index_caractere += 1){
        
        string_modificada += string[index_caractere]
        contador_de_caracteres++
    }

    for(let index_caractere = 0; index_caractere < tamanho_nova_string; index_caractere += 1){
        
        string_modificada += nova_string[index_caractere]
    }

    contador_de_caracteres += qtd_de_carateres_substituidos

    for(let index_caractere = contador_de_caracteres; index_caractere < tamanho_string; index_caractere += 1){
        string_modificada += string[index_caractere]
    }

    return string_modificada

}


main()