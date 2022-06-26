import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const mensagemBinaria = input('Digite uma mensagem em binário, de acordo com o enunciado: ')
    const binarios = mensagemBinaria.split('-')

    let verification = 0

    let decimal = 0

    let codigos_invalidos = ""

    if(!verificaLetras(binarios)){
        console.log('\tMensagem corrompida: Sequência de bits inválida')
    } else {  
        console.log(`${mensagemBinaria} OK`)

        for (let binario of binarios){

            decimal = binaryToDecimal(binario)
            if((decimal >= 97 && decimal <= 122) || (decimal >= 48 && decimal <= 57) || (decimal === 32)){
            } else {
                codigos_invalidos += String(binario) + " "
                verification++
            }
        }

        if(verification > 0){
            console.log(`Códigos inválidos: ${codigos_invalidos}`)
        }
    }
} 

function verificaLetra(letraEmBinario){

    if(letraEmBinario.length !== 8){
        return true
    }
    return false
}

function verificaLetras(vetorComLetras){

    for(let letras of vetorComLetras) {
        if(verificaLetra(letras)){
            return false
        }
    }
    
    return true
}

function binaryToDecimal(binario){

    const vetor = binario.split('')
    contador = 7
    let decimal = 0

    for (let i = 0; i < vetor.length; i++) {
        decimal += vetor[i] * (2**contador)
        contador--
    }
    return decimal
}


main()