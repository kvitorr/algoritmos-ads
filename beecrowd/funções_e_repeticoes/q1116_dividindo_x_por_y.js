import fs from 'fs'

const input = fs.readFileSync("q1116_input.txt", "utf-8")
const lines = input.split('\n')

function main(){


    let quantidade_de_pares = Number(lines.shift())

    while(quantidade_de_pares > 0){

        let [x, y] = lines.shift().split(' ')
        x = Number(x)
        y = Number(y)

        if(NotPossibleDivide(y)){
            console.log('divisao impossivel')
        } else {
            let divisao = divide(x, y)
            console.log(divisao.toFixed(1))
        }
        quantidade_de_pares--
    }
} 

const NotPossibleDivide = (y) => {return (y === 0)} 
const divide = (x,y) => {return x/y}
main()