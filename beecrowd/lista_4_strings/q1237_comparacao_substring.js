import fs from 'fs'
const lines = fs.readFileSync('q1237_comparacao_substring.txt', 'utf-8').split('\r\n')


function main(){

    while(lines. length > 0){

    const frase1 = lines.shift()
    const frase2 = lines.shift()

    const frase1_substrings = all_substrings(frase1)
    const frase2_substrings = all_substrings(frase2)


    const tamanho_maior_substring_comum = encontra_maior_tamanho_do_elemento_comum(frase1_substrings, frase2_substrings)
    
    console.log(tamanho_maior_substring_comum)
    }

}


function all_substrings (string){
    let substrings = ""
    let voltas = 0

    for(let i = 1; i <= string.length; i++){

        for(let j = i; j <= string.length; j++){

           if(voltas === string.length) substrings += fatia_string(string, i, j)
           else substrings += fatia_string(string, i, j) + "1"
        }

    }
    const vetor_substrings = substrings.split('1')
    return vetor_substrings
}

function fatia_string(string, inicio, fim){
    const index_inicio = inicio - 1
    const index_fim = fim - 1
    let fatia = ''
    let caractere

    for(let index_caractere = index_inicio; index_caractere <= index_fim; index_caractere += 1){
        caractere = string[index_caractere]
        fatia += caractere
    }
    return fatia
}


function encontra_maior_tamanho_do_elemento_comum(vetor1, vetor2){
    let tamanho_maior = 0
    let tamanho_elemento2 = 0

    for(let elemento1 of vetor1){

        for(let elemento2 of vetor2){

            if(elemento1 === elemento2){

                tamanho_elemento2 = elemento2.length

                if(tamanho_maior < tamanho_elemento2){

                    tamanho_maior = tamanho_elemento2
                }
            }
        }
    }
    return tamanho_maior
}

main()