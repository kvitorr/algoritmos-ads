//Receber entradas
import prompt from 'prompt-sync'
const input = prompt()

//Estilizando o Menu

export function show_menu(){
    let menu = '' 

    menu += "\n--------- MENU WORDPLAY ---------\n\n"
    menu += "1. Mostrar palavras com mais de 20 letras\n"
    menu += "2. Mostrar e calcular a quantidade de palavras que não contém a letra 'e'\n"
    menu += "3. Mostrar e calcular a quantidade de palavras sem uma série de letras proibidas\n"
    menu += "4. Mostrar e calcular a quantidade de palavras que contêm apenas série de letras\n"
    menu += "5. Mostrar e calcular a quantidade de palavras que contêm todas letras obrigatórias\n"
    menu += "6. Mostrar e calcular a quantidade de palavras que estão em ordem alfabética\n"



    menu += "0. Para encerrar o programa\n"
    console.log(menu)
}

//Corrigindo entradas


//Another functions


export function porcentagem(parcela, total){

    return (parcela/total)*100
}



//Exercício 9.1
export function is_more_than_20_characters(word){
    if(word.length > 20){
        return true
    }
}

export function words_than_20_characters(words){
    let count = 0
    let total = words.length
    for(let word of words){ 
        if(is_more_than_20_characters(word)){
            console.log(word)
            count++
        }
    }

    const porcentagem_de_palavras = porcentagem(count, total)
    console.log(`Existem ${count} (${porcentagem_de_palavras.toFixed(5)} %) palavras com mais de 20 letras`)
}


//Exercício 9.2 

export function has_no_e(word){

    for(let letter of word){
        if("e" === letter || letter === "E"){
            return false
        }
    }
    return true
}

export function words_without_e(words){
    const TOTAL_DE_PALAVRAS = words.length
    let count = 0

    for(let word of words){ 
        if(has_no_e(word)){
            console.log(word)
            count++
        }
    }
    const porcentagem_de_palavras = porcentagem(count, TOTAL_DE_PALAVRAS)
    console.log(`Existem ${count} (${porcentagem_de_palavras.toFixed(5)} %) palavras sem a letra "e"`)
}


//Exercício 9.3

export function containAny(word, letters){
    for(let lettersOfWord of word){
        for(let letter of letters)
            if(lettersOfWord === letter){
                return true
            }
    }
    return false
}

export function avoids(words){
    let forbiddenLetters = input('Digite uma série de letras proibidas: ')
    forbiddenLetters += forbiddenLetters.toUpperCase()

    let count = 0
    const TOTAL_DE_PALAVRAS = words.length

    for(let word of words) {
            if(!containAny(word, forbiddenLetters)){
                count++
                console.log(word)
            }
        }
    const porcentagem_de_palavras = porcentagem(count, TOTAL_DE_PALAVRAS)
    console.log(`Existem ${count} (${porcentagem_de_palavras.toFixed(5)} %) palavras que não contêm as letras (${forbiddenLetters})`)    
}

// Exercício 9.4

export function uses_only(word, mandatoryLetters){
    let verification = 0

    for(let letters of word){
        for(let letter of mandatoryLetters){
            if(letter === letters){ //Se a letra da palavra for igual a pelo menos uma letra das letras obrigatórias, verification vai ficar maior que zero.
                verification++
            }
        }

        if(verification === 0){
            return false 
        }
        verification = 0 //zero verification e vou pra próxima letra da palavra pra verificar se ela faz parte das mandatory letters
    }
    return true
}


export function usesOnlyMandatoryLetters(words){
    const TOTAL_DE_PALAVRAS = words.length
    let count = 0
    const mandatoryLetters = input('Digite as letras obrigatórias que as palavras devem ser compostas: ')

    for(let word of words){
        if(uses_only(word, mandatoryLetters)){
            count++
            console.log(word)
        }
    }

const porcentagem_de_palavras = porcentagem(count, TOTAL_DE_PALAVRAS)
    console.log(`Existem ${count} (${porcentagem_de_palavras.toFixed(5)} %) palavras que apenas contêm as letras (${mandatoryLetters})`) 
}


//Exercício 9.5

export function contains(word, letter){
    for(let letters of word){
        if(letters === letter){
            return true
        }
    }
    return false
}


export function uses_all(word, mandatoryLetters){

    let verification = 0

        for(let mandatoryLetter of mandatoryLetters){
            if(contains(word, mandatoryLetter)){
                verification++
            }
        }

        if(verification >= mandatoryLetters.length){ // verification deve ser maior ou igual ao tamanho de mandatoryLetter
            return true
        } else {
            return false
        }
}

export function usesAllMandatoryLetters(words){
    let mandatoryLetters = input('Digite as letras obrigatórias que as palavras devem conter no mínimo uma vez: ')

    let count = 0
    const TOTAL_DE_PALAVRAS = words.length

    for(let word of words){
        if(uses_all(word, mandatoryLetters)){
            count++
            console.log(word)
        }
    }

    const porcentagem_de_palavras = porcentagem(count, TOTAL_DE_PALAVRAS)
    console.log(`Existem ${count} (${porcentagem_de_palavras.toFixed(5)} %) palavras que contêm as todas as letras (${mandatoryLetters})`) 
}

//Exercício 9.6
//Podemos comparar letras, por exemplo: a < b -> true
//a < undefined || a > undefined -> false


export function is_abecedarian(word){
    for(let i in word){
        
        if(word[i] < word[i-1]){
        return false
        }
    }
    return true
}


export function abecedarian(words){
    let count = 0
    const TOTAL_DE_PALAVRAS = words.length

    for(let word of words){
        if(is_abecedarian(word)){
            console.log(word)
            count++
        }
    }

    const porcentagem_de_palavras = porcentagem(count, TOTAL_DE_PALAVRAS)
    console.log(`Existem ${count} (${porcentagem_de_palavras.toFixed(5)} %) palavras em ordem alfabética)`) 

}