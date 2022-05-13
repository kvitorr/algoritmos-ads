import prompt from 'prompt-sync'
const input = prompt()

function main(){

    //Entrada e declaração de variáveis
    let letter = input('Digite uma letra do alfabeto: ')


    //Processamento e saídas
    while(!isAlphabetLetter(letter)){
        letter = input("Entrada inválida. Digite uma letra do alfabeto: ")
    }
        if(isVowel(letter)){
            console.log('É uma vogal')
        } else {
            console.log('É uma consoante')
        }
    

}

function isAlphabetLetter(letter){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet += alphabet.toUpperCase()

    for(let alphabetLetter of alphabet){
        if(letter === alphabetLetter){
            return true
        }
    }
    return false
}

function isVowel(letter){
    const vowels = "aeiou"
    for(let vowel of vowels){
        if(letter === vowel){
           return true 
        }
    }
    return false
}
main()