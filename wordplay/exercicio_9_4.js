


function uses_only(palavra, serie_de_letras){

    let verification = 0

    for(let letra_p of palavra){

        for(let letra_s of serie_de_letras){ //verifica se a letra da palavra pertence a série de letras
            if(letra_p === letra_s){ // se pertencer, verification vai ficar maior que zero
                verification++
            }
        }

        if(verification === 0){ //se verification for igual a zero, significa que a letra da palavra não está dentro da letra da série
            return false //portanto encerra a função
        } // caso seja seja diferente de zero, zeramos o verification pra verificar a próxima letra da palavra

        verification = 0
    }  
    //se não tiver retornado false em momento algum, a função vai retornar true
    return true
}
    

function verifica_se_contem_somente_a_serie_de_letras(palavras, serie_de_letras){

    let contador = 0

    for(let palavra of palavras) {

        if(uses_only(palavra, serie_de_letras)){
            console.log(palavra)
            contador++
        }
    }

    const percentual = (contador/palavras.length)*100
    console.log(`${contador} (${percentual.toFixed(2)}%) palavra(s) contêm apenas letras da série especificada (${serie_de_letras} em sua composição)`)
}

verifica_se_contem_somente_a_serie_de_letras(palavras, serie)
