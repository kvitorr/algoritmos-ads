
import {input} from './io_utils.js'


function uses_all(palavra, letras_obrigatorias){
   
    let verification = 0 

    for(let letra_o of letras_obrigatorias){ 

        for(let letra_p of palavra){ //verifica se a letra obrigatória existe na palavra
            if(letra_o === letra_p){ //se a letra obrigatória estiver pelo menos uma vez dentro da palavra, verification vai sofrer um acréscimo
                verification++
            }
        }

        if(verification === 0){ //se verification for igual a zero, significa que a letra obrigatória não está na palavra
            return false //retornando falso
        }
        verification = 0
    }

    return true //retornará true, se todas as letras obrigatórias estiverem dentro da palavra
    
}

function verifica_se_contem_as_letras_obrigatorias(palavras){
    const letras_obrigatorias = input('Digite as letras obrigatórias que a palavra deve ter, sem espaço: ')
    let contador = 0

    for(let palavra of palavras){
        if(uses_all(palavra, letras_obrigatorias)){
            console.log(palavra)
            contador++
        }
    }

    const percentual = (contador/palavras.length)*100
    console.log(`Existem ${contador} (${percentual.toFixed(3)}%) palavra(s) que contêm todas as letras obrigatórias (${letras_obrigatorias} em sua composição)`)

}