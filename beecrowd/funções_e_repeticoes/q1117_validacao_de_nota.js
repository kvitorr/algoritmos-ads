import fs from 'fs'
const lines = fs.readFileSync('./q1117_validacao_de_nota.txt', 'utf-8').split('\n')


function main(){

    let nota1 = Number(lines.shift())
    let nota2 = Number(lines.shift())

    while(notaIncorreta(nota1)){
        console.log('nota invalida')
        nota1 = Number(lines.shift())
    }

    while(notaIncorreta(nota2)){
        console.log('nota invalida')
        nota2 = Number(lines.shift())
    }

    const media = (nota2+nota1)/2
    console.log(`media = ${media.toFixed(2)}`)
} 


function notaIncorreta(n1){
    if(n1 > 10 || n1 < 0){
        return true
    }
    return false
}

main()