import fs from 'fs'
const lines = fs.readFileSync('q1144_sequencia_logica.txt', 'utf-8').split('\r\n')

function main(){

    const quantidade_de_linhas = Number(lines.shift())

    get_sequencia(quantidade_de_linhas)

} 


function get_sequencia(quantidade_de_linhas){

    let saida = ''
    let second = 0
    let third = 1

    for(let i = 1; i <= quantidade_de_linhas; i += 1){

        
        second = i ** 2
        third = i ** 3

        saida = i + " " + second + " " + third
        console.log(saida)

        second += 1
        third += 1

        saida = i + " " + second + " " + third
        console.log(saida)

        saida = ''

    }


}

main()