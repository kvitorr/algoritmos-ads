//Aceita

import fs from 'fs'
const lines = fs.readFileSync('./q1024_criptografia.txt', 'utf-8').split('\r\n')

function main(){

    const quantidade_de_mensagens = lines[0]

    for(let i = 1; i <= quantidade_de_mensagens; i++){
    const mensagem_deslocada = deslocar_letras_em_n_posicoes_ascii(lines[i], 3)

    const mensagem_invertida = inverter_string(mensagem_deslocada)

    const mensagem_criptografada = deslocar_na_segunda_metade(mensagem_invertida)
    console.log(mensagem_criptografada)
    }
} 

function eh_letra_minuscula (letra){
    const codigo_ascii = letra.charCodeAt()
    return ((codigo_ascii >= 97) && (codigo_ascii <= 122))
}

function eh_letra_maiuscula(letra){
    const codigo_ascii = letra.charCodeAt()
    return ((codigo_ascii >= 65) && (codigo_ascii <= 90))   
}


function deslocar_letras_em_n_posicoes_ascii(mensagem, n){
    let mensagem_deslocada = ""
    let codigo_ascii = 0

    for (let letra of mensagem){
        codigo_ascii = letra.charCodeAt()

        if(eh_letra_minuscula(letra) || eh_letra_maiuscula(letra)){
            mensagem_deslocada += String.fromCharCode(codigo_ascii + n)
        } else {
            mensagem_deslocada += letra
        }
    }
    return mensagem_deslocada
}

function deslocar_caractere_em_n_posicoes_ascii(caractere, n){
    let mensagem_deslocada = ""
    let codigo_ascii = caractere.charCodeAt()

    mensagem_deslocada += String.fromCharCode(codigo_ascii + n)
    
    return mensagem_deslocada
}


function inverter_string(string){
    let mensagem_invertida = ""
    const ultimo_indice = string.length - 1 

    for(let i = ultimo_indice; i >= 0; i--){
        mensagem_invertida += string[i]    
    }
    return mensagem_invertida
}

function deslocar_na_segunda_metade(mensagem){
    const tamanho_da_mensagem = mensagem.length
    const index_metade = Math.trunc(tamanho_da_mensagem/2)
    let mensagem_deslocada = ""
    let caractere

    for(let i = 0; i < tamanho_da_mensagem; i++){

        if(i < index_metade){
            mensagem_deslocada += mensagem[i]
        } else {
            caractere = mensagem[i]
            mensagem_deslocada += deslocar_caractere_em_n_posicoes_ascii(caractere, -1)
        }
    }

    return mensagem_deslocada
}


main()