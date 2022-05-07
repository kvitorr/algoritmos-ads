
import fs from 'fs'

var input = fs.readFileSync('./input.txt', 'utf8');

var lines = input.split('\n');

function main(){
    
    let indice = 0

    const [maior, indice_do_maior] = verifica_maior_e_indice(lines, indice)

    console.log(`${maior}\n${indice_do_maior}`)
} 


//Functions

const maior_que = (n1, n2) => {return n1 > n2}

function verifica_maior_e_indice(lines, indice){
    let maior = 0
    let n = 1

    while(lines.length > 0){
        
        let number_1 = Number(lines.shift())

        if(maior_que(number_1, maior)){
            maior = number_1
            indice = n
        }
        n++
    }
    return [maior, indice]
}

main()