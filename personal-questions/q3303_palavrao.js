import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\r\n')

function main(){

    const palavra = lines[0]

    if(palavra.length >= 10){
        console.log('palavrao')
    } else {
        console.log('palavrinha')
    }


} main()