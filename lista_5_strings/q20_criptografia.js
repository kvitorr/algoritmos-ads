//Leia uma frase e faça a criptografia, retirando as vogais das palavras. O programa deverá armazenar estas vogais e suas posições originais, mostrar a frase criptografada, em seguida, descriptografar a frase e mostrá-la na tela.


import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const phrase = input('Frase: ')

    const [encrypted_phrase, vector_vowels] = do_encryption(phrase)

    console.log(`\tFrase criptografada: ${encrypted_phrase}`)

    const decrypted_phrase = do_decrypt(encrypted_phrase, vector_vowels)

    console.log(`\tFrase descriptografada: ${decrypted_phrase}`)


} 

function do_encryption(string){

    let encrypted_phrase = ""

    const vector = string.split('')

    const elements_quantity = vector.length

    let vector_vowels = new Array(elements_quantity)

    for(let index = 0; index < elements_quantity; index += 1){

        if(is_vowel(string[index])){

            vector_vowels[index] = string[index]

        } else {
            vector_vowels[index] = ""
            encrypted_phrase += string[index]
        }

    }
    return [encrypted_phrase, vector_vowels]
}


function is_vowel(character){

    const vowels = "aeiouAEIOU"

    for(let vowel of vowels){

        if(character === vowel){
            return true
        }

    }

    return false
}

function do_decrypt(encrypted_phrase, vector_vowels){

    const vector_encrypted_phrase = encrypted_phrase.split('')
    const tamanho_vetor = vector_vowels.length

    let cont_caracteres = 0

    for(let index = 0; index < tamanho_vetor; index += 1){

        if(vector_vowels[index] === ''){

            vector_vowels[index] = vector_encrypted_phrase[cont_caracteres]

            cont_caracteres++
        }  

    }

    const decrypted_phrase = vector_vowels.join('')
    return decrypted_phrase

} main()