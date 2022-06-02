//As companhias de transportes aéreos costumam representar os nomes dos passageiros no formato último sobrenome/nome. Por exemplo, o passageiro Carlos Drummond de Andrade seria indicado por Andrade/Carlos. Escreva um programa que leia um nome completo e o escreva no formato acima.

import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const nome = input('Nome: ')

    const nome_passageiro = formato_sobrenome_nome(nome)

    console.log(nome_passageiro)

} 


function formato_sobrenome_nome(nome){

    const vetor_nome = nome.split(' ')

    const ultimo_index = vetor_nome.length - 1

    const nome_passageiro = vetor_nome[ultimo_index] + "/" + vetor_nome[0]

    return nome_passageiro
}


main()
