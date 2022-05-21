import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')


function main(){


    let [x, y] = lines.shift().split(' ').map(Number)

    while ((x !== 0) && (y !==0)){

        if(primeiroQuadrante(x, y)){
            console.log('primeiro')
        } else if (segundoQuadrante(x, y)){
            console.log('segundo')
        } else if (terceiroQuadrante(x, y)){
            console.log('terceiro')
        } else if (quartoQuadrante(x, y)){
            console.log('quarto')
        }

        [x, y] = lines.shift().split(' ').map(Number)    
    }
} 

const primeiroQuadrante = (x, y) => {return (x > 0 && y > 0)}
const segundoQuadrante = (x, y) => {return (x < 0 && y > 0)}
const terceiroQuadrante = (x, y) => {return (x < 0 && y < 0)}
const quartoQuadrante = (x, y) => {return (x > 0 && y < 0)}

main()