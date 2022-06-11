import fs from 'fs'
const lines = fs.readFileSync('q1143_quadrado_cubo.txt', 'utf-8').split('\r\n')

function main(){

    const quantidade_de_linhas = Number(lines.shift())

    get_quadrado_e_cubo(quantidade_de_linhas)

} 


function get_quadrado_e_cubo(quantidade_de_linhas){

    let saida

    for(let i = 1; i <= quantidade_de_linhas; i += 1){

        saida = i + " " + i**2 + " " + i ** 3
        console.log(saida)
        saida = ""
    }
}

main()