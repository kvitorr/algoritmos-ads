// Escreva uma sub-rotina que gere logins para usuários de um sistema de computação baseado na seguinte regra: o login é composto pelas letras iniciais do nome do usuário.


import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const nome = input('Nome: ')

    const login = gerar_de_login(nome)

    console.log(`Login: ${login}`)   

} 

function gerar_de_login(nome){

    let vetor_nome = nome.split(' ')
    const tamanho_vetor = vetor_nome.length
    let login = ""

    for(let i = 0; i < tamanho_vetor; i += 1){
        login += vetor_nome[i][0]
    }

    return login
}



main()