import fs from 'fs'
const lines = fs.readFileSync('./q1118_notas_com_validacao.txt', 'utf-8').split('\n')

function main(){

    while(true){
         //Entradas
        let nota1 = Number(lines.shift())
        let nota2 = Number(lines.shift())
        let media = 0

        //Validação das entradas
        nota1 = nota_correta(nota1)
        nota2 = nota_correta(nota2)
        
        //Calculos intermediarios
        media = (nota1 + nota2)/2
        console.log(`media = ${media.toFixed(2)}`)

        console.log('novo calculo (1-sim 2-nao)')
        let option = Number(lines.shift())

        while(noCorrectOption(option)){
            console.log('novo calculo (1-sim 2-nao)')
            option = Number(lines.shift())
        }
        if(option === 2){
            break
        }
    }
}

function nota_invalida(n1){
    if(n1 < 0 || n1 > 10){
        return true
    } else { return false }
}

function nota_correta(n1){
    while(nota_invalida(n1)){
        console.log('nota invalida')
        n1 = Number(lines.shift())
    }
    return n1
}

function noCorrectOption(option){
    if(option === 1 || option === 2){
        return false
    }
    return true
}

main()