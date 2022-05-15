import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')

function main(){

    let x = Number(lines[0])
    let y = Number(lines[1])
    let n = 1
    let soma = 0

    let [maior, menor] = menorEmaior(x, y)
    menor += 1

    while(menor < maior){

        if(ehImpar(menor)){
            soma += menor
        }
        menor++
    }
    console.log(soma)




} 

const ehImpar = (n1) => {return !(n1 % 2 === 0)}

function menorEmaior(n1, n2){

    if(n1 > n2){
        return [n1, n2]
    } else {
        return [n2, n1]
    }

}

main()
