import { load_files, top_n_por_area, top_n_todas_areas } from "./functions_utils.js";
import prompt from 'prompt-sync'
const input = prompt()



function main(){

    console.clear()
    const database = load_files()

    let option
    menu()
    option = Number(input('Opção: '))

    while(option !== 0){

        option_menu(database, option)
    
        input('Press ENTER to continue.')
        console.clear()
        menu()
        option = Number(input('Opção: '))

    }

} 

function menu(){

    let menu = '\n=== Consulta de Dados sobre o ENEM 2014 por escola ===\n'
    menu += "1. Top N escolas do Brasil (Todas as áreas)\n"
    menu += "2. Top N escolas do Brasil (por área)\n"

    menu += '\n0. Sair\n'

    console.log(menu)
}

function option_menu(database, option){
    let n 
    let area
    
    if(option === 1){
        n = Number(input('N: '))
        top_n_todas_areas(database, n)
    } else if (option === 2){

        console.log('\nÁREAS DO ENEM:')
        console.log('1. Linguagens')
        console.log('2. Matemática')
        console.log('3. Ciências da Natureza')
        console.log('4. Ciências Humanas')
        console.log('5. Redação\n')


        area = Number(input('Área: '))
        n = Number(input('Top n: '))

        if(area === 1){
            area = 8
        } else if (area === 2){
            area = 9
        } else if (area === 3){
            area = 10
        } else if (area === 4){
            area = 11
        } else if (area === 5){
            area = 12
        }

        top_n_por_area(database, n, area)

    }

}



main()

