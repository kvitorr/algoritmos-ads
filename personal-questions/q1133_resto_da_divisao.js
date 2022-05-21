import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')


function main(){

    const x = Number(lines.shift())
    const y = Number(lines.shift())

    const [menor, maior] = ordemCrescente(x, y)

    let numero_intermediario = menor + 1

    while(numero_intermediario < maior){

        if(numero_intermediario % 5 === 2 || numero_intermediario % 5 === 3){
            console.log(numero_intermediario)
        }
        numero_intermediario++
    }
} 

function ordemCrescente (n1, n2){
    if(n1 > n2){
        return [n2, n1]
    } else if (n2 > n1){
        return [n1, n2]
    }
}

main()