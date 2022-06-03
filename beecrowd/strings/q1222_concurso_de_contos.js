import fs from 'fs'
const lines = fs.readFileSync('q1222_concurso_de_contos.txt', 'utf-8').split('\r\n')

function main(){

    let numero_de_palavras_do_conto
    let numero_maximo_de_caracteres_por_linha
    let numero_maximo_de_linhas_por_pagina
    let quantidade_de_linhas
    let quantidade_de_paginas
    let conto

    while(lines.length >= 2){

        [numero_de_palavras_do_conto, numero_maximo_de_linhas_por_pagina, numero_maximo_de_caracteres_por_linha] = lines.shift().split(' ').map(Number)

        conto = lines.shift().split(' ').join('1 1').split('1')

        quantidade_de_linhas = encontra_quantidade_de_linhas_do_conto(conto, numero_maximo_de_caracteres_por_linha)

        quantidade_de_paginas = arredonda_pra_cima(quantidade_de_linhas/numero_maximo_de_linhas_por_pagina)

        console.log(quantidade_de_paginas)

    }


} 


function arredonda_pra_cima(numero){

    const parte_inteira = Math.trunc(numero)
    const parte_decimal = numero - parte_inteira

    if(parte_decimal > 0){
        const numero_arredondado = parte_inteira + 1
        return numero_arredondado
    }

    return numero

}


function encontra_quantidade_de_linhas_do_conto(vetor_conto, numero_maximo_de_caracteres_por_linha){

    const vetor_palavras_e_espacos = vetor_conto

    let tamanho_palavra = 0
    let caracteres_restantes = 0

    let currentCharactersQuantity = 0

    let quantidade_de_linhas = 1

    for(let palavra of vetor_palavras_e_espacos){

        caracteres_restantes = numero_maximo_de_caracteres_por_linha - currentCharactersQuantity
        tamanho_palavra = palavra.length

        if( (tamanho_palavra) <= caracteres_restantes ){

            currentCharactersQuantity += tamanho_palavra
    
        } else {
            quantidade_de_linhas += 1
            currentCharactersQuantity = 0
            if(palavra !== " ") currentCharactersQuantity += tamanho_palavra
        }
    }
    return quantidade_de_linhas

}


main()