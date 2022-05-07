import fs from 'fs'

const input = fs.readFileSync('q1442_input.txt', 'utf-8')
const lines = input.split('\n')

function main(){
    const quantidade_de_linhas = Number(lines[0])
    saida(quantidade_de_linhas)
} 

function saida(quantidade_de_linhas){
    let n = 1
    while(quantidade_de_linhas > 0){
        console.log(`${n} ${n+1} ${n+2} PUM`)
        n+=4
        quantidade_de_linhas--
    }
}

main()