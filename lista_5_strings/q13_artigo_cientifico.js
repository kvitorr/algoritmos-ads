//As normas para a exibição da bibliografia de um artigo cientifico, de uma monografia, de um livro, texto etc., exigem que o nome do autor seja escrito no formato último sobrenome, sequência das primeiras letras do nome e dos demais sobrenomes, seguidas de ponto final. Por exemplo, Antonio Carlos Jobim seria referido por Jobim, A. C.. Escreva um programa que receba um nome completo e o escreva no formato de bibliografia.

import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const nome = input('Nome: ')

    const nome_formatado = formata_nome(nome);

    console.log(nome_formatado)

} 

function formata_nome(nome){

    const vetor_nome = nome.split(' ')
    const ultimo_index = vetor_nome.length - 1

    let nome_formatado = vetor_nome[ultimo_index] + ", "

    for(let i = 0; i < ultimo_index; i += 1){

        if(i === (ultimo_index-1)) nome_formatado += vetor_nome[i][0] + ".."
        else nome_formatado += vetor_nome[i][0] + ". "
    }

    return nome_formatado
}

main()