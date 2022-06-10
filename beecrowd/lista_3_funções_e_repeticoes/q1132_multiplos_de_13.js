import fs from 'fs'
const lines = fs.readFileSync('./q1132_multiplos_de_13.txt', 'utf-8').split('\n')


function main(){

    const x = Number(lines.shift())
    const y = Number(lines.shift())
    let soma = 0


    let [maior, menor] = ordem(x, y)

    while(menor <= maior){
        if(noEresMultiploDe13(menor)){
            soma += menor
        }
        menor++
    }

    console.log(soma)
} 

function noEresMultiploDe13(n1) {
    if(n1 % 13 === 0){
        return false 
    } 
    return true
}

function ordem(n1, n2){
    if(n1 > n2){
        return [n1, n2]
    } else {
        return [n2, n1]
    }
} 

main()