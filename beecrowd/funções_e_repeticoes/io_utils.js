import readFileSync from 'fs'

function load_words_from_file(filename){
    const file = readFileSync(filename, {encoding: 'utf-8'})

    const loaded_strings = file.split('\n')

    return loaded_strings
}