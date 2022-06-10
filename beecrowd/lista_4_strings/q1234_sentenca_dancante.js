import fs from 'fs'
import { sensitiveHeaders } from 'http2'
const lines = fs.readFileSync('q1234_sentenca_dancante.txt', 'utf-8').split('\r\n')

function main(){

    while(lines.length > 0){

    
    const frase = lines.shift()
    const setenca_dancante = transforma_em_setenca_dancance(frase)

    console.log(setenca_dancante)

    }
    console.log('') 
}

const eh_par = (numero) => {return (numero % 2) === 0}

const eh_impar = (numero) => {return !eh_par(numero)}

function eh_maiuscula(caractere){

    const codigo_ascii = caractere.charCodeAt()

    const condicao = (codigo_ascii >= 65) && (codigo_ascii <= 90)

    return condicao
}

function eh_minuscula(caractere){

    const codigo_ascii = caractere.charCodeAt()

    const condicao = (codigo_ascii >= 97) && (codigo_ascii <= 122)

    return condicao
}

const nao_eh_espaco = (caractere) => {return !(caractere === ' ')}

function torna_maiuscula(caractere){

    const codigo_ascii = caractere.charCodeAt()

    const caractere_maiusculo = String.fromCharCode(codigo_ascii - 32 )

    return caractere_maiusculo
}

function torna_minuscula(caractere){

    const codigo_ascii = caractere.charCodeAt()

    const caractere_minuscula = String.fromCharCode(codigo_ascii + 32 )

    return caractere_minuscula
}

function transforma_em_setenca_dancance(frase){

    let contador_sentenca_dancante = 0
    const tamanho_da_frase = frase.length
    let frase_modificada = ""
    let caractere

    //pares = maiusculo
    //impares = minusculo

    for(let index_caractere = 0; index_caractere < tamanho_da_frase; index_caractere += 1){

        caractere = frase[index_caractere]

        if(eh_par(contador_sentenca_dancante) && nao_eh_espaco(caractere)){

            if(eh_minuscula(caractere)) frase_modificada += torna_maiuscula(caractere)
            else frase_modificada += caractere
            contador_sentenca_dancante++
            
        } else if (eh_impar(contador_sentenca_dancante) && nao_eh_espaco(caractere)){
           
            if(eh_maiuscula(caractere)) frase_modificada += torna_minuscula(caractere)
            else frase_modificada += caractere
            contador_sentenca_dancante++

        } else if (!nao_eh_espaco(caractere)){
            frase_modificada += caractere
        }

    }
    return frase_modificada
}

main()