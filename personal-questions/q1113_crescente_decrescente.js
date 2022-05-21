import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')


function main(){

    let [x, y] = lines.shift().split(' ').map(Number)  
    
    while(!(x === y)){
        if(ehCrescente(x, y)){
            console.log('Crescente')
        } else if (!ehCrescente(x, y)){
            console.log('Decrescente')
        }
        [x, y] = lines.shift().split(' ').map(Number)    
    }
} 

function ehCrescente(n1, n2){
    if(n1 > n2){
        return false
    } else if(n2 > n1){
        return true
    }
}
main()