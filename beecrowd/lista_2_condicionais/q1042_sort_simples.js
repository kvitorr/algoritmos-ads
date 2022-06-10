//Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

import fs from 'fs'

var input = fs.readFileSync('./inputs/q1042_sort_simples.txt', 'utf8');
var lines = input.split('\n');


function main(){

    const [valor1, valor2, valor3] = lines[1].split(' ').map(Number)

    const [menor, meio, maior] = growing_order(valor1, valor2, valor3).split(' ')

   console.log(`${menor}\n${meio}\n${maior}\n\n${valor1}\n${valor2}\n${valor3}`)


} 

function growing_order(n1, n2, n3){
    let resultado = ''
    
    if(n1 < n2 && n1 < n3){
        resultado += String(n1) + " "

        if(n2 > n3){
            resultado += String(n3) + " " + String(n2)  
        } else {
            resultado += String(n2) + " " + String(n3)
        }


    } else if (n2 < n1 && n2 < n3){
        resultado += String(n2) + " "
        
        if(n1 > n3){
            resultado += String(n3) + " " + String(n1)  
        } else {
            resultado += String(n1) + " " + String(n3)
        }

    } else {
        resultado += String(n3) + " "

        if(n2 > n1){
            resultado += String(n1) + " " + String(n2)  
        } else {
            resultado += String(n2) + " " + String(n1)
        }    
    }
    return resultado
}

main()