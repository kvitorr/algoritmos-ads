import fs from 'fs'
import { matrix_descending_order } from './matriz_functions.js'
import { push_method } from './vector_functions.js'



// Carregando todos os arquivos para uma variável

export function load_files(){
    const lines = fs.readFileSync('./enem2014_nota_por_escola.txt', 'utf-8').split('\n')

    let files = []

    for (let i = 0; i < lines.length; i++) {
        files = push_method(files, lines[i].split(';'))
    }
    return files
}

// =====================================================================



//Top N Brasil (todas as áreas)

export function top_n_todas_areas(database, n){

    console.log('\n==============================================')
    console.log(`Top ${n} Escolas, ENEM 2014 (Média Geral)`)

    for (let i = 0; i < n; i++) {    
        console.log(`\t${i+1}. ${database[i][1]}`)
        console.log(`\tMédia: ${database[i][7]}\n`)
    }
    console.log()
}

// =====================================================================

export function top_n_por_area(database, n, column_number){

    let database2 = matrix_descending_order(database, column_number)

    console.log(database2[0],database2[1],database2[2],database2[3],database2[4] )

    let area
    
    if(column_number === 8){
        area = "Linguagens"
    } else if (column_number === 9){
        area = "Matemática"
    } else if (column_number === 10){
        area = "Ciências da Naturezas"
    } else if (column_number === 11){
        area = "Ciências Humanas"
    } else if (column_number === 12){
        area = "Redação"
    }

    console.log('\n==============================================')
    console.log(`Top ${n} Escolas em ${area} no ENEM 2014`)

    for (let i = 0; i < n; i++) {    
        console.log(`\t${i+1}. ${database2[i][1]}`)
        console.log(`\tCidade: ${database2[i][2]}`)
        console.log(`\tMédia: ${database2[i][column_number]}\n`)
    }
    console.log()

    

}

