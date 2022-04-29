//Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

import fs from 'fs'

var input = fs.readFileSync('./inputs/q1036_bhaskara.txt', 'utf8');
var lines = input.split('\n');

function main(){

    //Entrada
    const [A, B, C] = lines[3].split(' ')

    if (A === 0 || A == 0) {
        console.log('Impossivel calcular')
    } else {
    const delta_var = delta(A, B, C)

    const raiz1 = raizpositiva(A, B, delta_var)
    const raiz2 = raiznegativa(A, B, delta_var)

    //Processamento
    if(delta_var >= 0){
        console.log(`R1 = ${raiz1.toFixed(5)}`)
        console.log(`R2 = ${raiz2.toFixed(5)}`)
    } else {
        console.log("Impossivel calcular")
    }
}
} 

const delta = (a, b, c) => {return ((b*b) - (4 * a * c))}

const raizpositiva = (a, b, delta) => {return ((b*(-1) + Math.sqrt(delta))/(2*a))}
const raiznegativa = (a, b, delta) => {return ((b*(-1) - Math.sqrt(delta))/(2*a))}


main()