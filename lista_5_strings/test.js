import prompt from 'prompt-sync'
const input = prompt()


function string_menor_igual_20_caracteres(){

    let string = input('Palavra: ')

    let tamanho_string = string.length


    while(tamanho_string > 20){
        
        console.log('ERRO: Digite uma palavra com até 20 caracteres')
        string = input('Palavra: ')

        tamanho_string = string.length
        console.log(tamanho_string)
    }

    return string

}


const b = string_menor_igual_20_caracteres()