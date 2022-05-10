//Importar arquivo.txt
import fs from 'fs'
const dados = fs.readFileSync('palavras.txt', 'utf-8')
const words = dados.split('\n')

//Receber entradas
import prompt from 'prompt-sync'
const input = prompt()

//Importanto mainfunctions
import {show_menu, words_than_20_characters, words_without_e, usesOnlyMandatoryLetters, usesAllMandatoryLetters, abecedarian} from './funcionalitys.js'


function main(){

    show_menu()
    let option = Number(input('escolha uma opção: '))


    while(option !== 0){

        if(option === 1) {
            words_than_20_characters(words)
        } else if (option === 2){
            words_without_e(words)
        } else if (option === 3){
            avoids(words)
        } else if (option === 4){
            usesOnlyMandatoryLetters(words)
        } else if (option === 5){
            usesAllMandatoryLetters(words)
        } else if (option === 6){
            abecedarian(words)
        }

        show_menu()
        option = Number(input('escolha uma opção: '))
        console.clear()
    }
}

main()