//Aceita

import fs from 'fs'
const lines = fs.readFileSync('q1235_dentro_pra_fora.txt', 'utf-8').split('\r\n')


function main(){

    const qtd_de_casos = lines[0]

    for(let indice = 1; indice <= qtd_de_casos; indice += 1){

        const frase = lines[indice]

        const frase_decifrada = desembaralha_frase(frase)

        console.log(frase_decifrada)
    }

    
} 

function fatia_string_direita_to_esquerda(string, inicio, fim){

    let string_fatiada = ""
    let caractere

    for(let index_caractere = inicio; index_caractere >= fim; index_caractere -= 1){
        
        caractere = string[index_caractere]

        string_fatiada += caractere

    }

    return string_fatiada
}


function desembaralha_frase(frase){

    const tamanho_da_frase = frase.length
    const index_metade = (tamanho_da_frase/2) - 1
    const index_final = tamanho_da_frase - 1

    const inicio_da_frase = fatia_string_direita_to_esquerda(frase, index_metade, 0)
    const final_da_frase = fatia_string_direita_to_esquerda(frase, index_final, index_metade + 1)

    const frase_decifrada = inicio_da_frase + final_da_frase

    return frase_decifrada
}

main()