

import fs from 'fs'

var input = fs.readFileSync('./inputs/q1040_media3.txt', 'utf8');
var lines = input.split('\n');


function main(){

    
    const [N1, N2, N3, N4] = lines[0].split(' ').map(Number)
    const media_ponderada_var = media_ponderada(N1, N2, N3, N4)

    console.log(`Media: ${media_ponderada_var.toFixed(1)}`)

    if(media_ponderada_var >= 7.0){
        console.log('Aluno aprovado.')

    } else if (media_ponderada_var < 5.0) {
        console.log('Aluno reprovado.')

    } else {
        console.log('Aluno em exame.')
        
        const N5 = Number(lines[1])      
        console.log(`Nota do exame: ${N5.toFixed(1)}`)

        const media_final = media_2(media_ponderada_var, N5)

        if(media_final >= 5.0){
            console.log('Aluno aprovado.')
        } else {
            console.log('Aluno reprovado.')
        }
        console.log(`Media final: ${media_final.toFixed(1)}`)
    }
    
} 

const media_ponderada = (n1, n2, n3, n4) => {return ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1))/10}

const media_2 = (n1, n2) => {return ((n1 + n2)/2)}

main()