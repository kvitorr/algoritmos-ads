import fs from 'fs'

const input = fs.readFileSync('./q1101_sequencia_de_numeros_e_soma.txt', 'utf-8')
let lines = input.split("\r\n")

function main(){

    while(lines.length > 0) {
    //Entradas e variáveis
    const [number_1, number_2] = lines.shift().split(' ') 
    const [maior, menor] = bigger_and_lower(number_1, number_2)
    let sum = 0 
    let saida = ""

    if(maior <= 0 || menor <= 0){
        break
    }

    //Processamento
    for(let n = menor; n <= maior; n++){
        sum += Number(n)
        saida += String(n) + " "
    }

    //Saída
    saida += "Sum=" + String(sum)
    console.log(saida) 
    }
} 


function bigger_and_lower(n1, n2){
    n1 = Number(n1)
    n2 = Number(n2)
    if(n1 > n2){
        return [n1, n2]
    } else {
        return [n2, n1]
    }
} main()