import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    const qtd = Number(lines.shift())
    let contador = 0
    let media = 0
    let notas = 0
    


    while(contador < qtd){
        
        notas = lines.shift()

        const [n1, n2, n3] = notas.split(' ').map(Number)

        media = (n1 * 2 + n2 * 3 + n3 * 5)/10

        console.log(media.toFixed(1))

        contador++
    }

} main()
