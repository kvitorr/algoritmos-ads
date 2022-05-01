import {input} from './io_utils.js'




function main(){


    //Entradas
    const [A, B, C] = input('Digite 3 lados de um triangulo').split(' ').map(Number)

    //Processamento
    if(isTriangle(A, B, C) && isTriangle(B, C, A) && isTriangle(C, A, B)){
        const perimetro = calcula_perimetro(A, B ,C)

        //Saída
        console.log(`Perimetro = ${perimetro.toFixed(1)}`)

    } else {
        const trapezio = area_trapezio(A, B, C)

        //Saída
        console.log(`Area = ${trapezio.toFixed(1)}`)
    }
} 

const isTriangle = (a, b, c) => {return ((a + b) > c)}
const calcula_perimetro = (a, b, c) => {return a + b + c}
const area_trapezio = (a, b, c) => {return ((a+b)*c)/2}

main()