//Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

//Se o ponto estiver na origem, escreva a mensagem “Origem”.

//Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.


import fs from 'fs'

var input = fs.readFileSync('./inputs/q1041_coordenadas_de_um_ponto.txt', 'utf8');
var lines = input.split('\n');


function main(){

    //Entradas
    const [x,y] = lines[0].split(' ').map(Number)

    //Processamento
    const resultado = coordenadas_ponto(x,y)

    //Saídas

    console.log(`${resultado}`)
} 

function coordenadas_ponto(x,y){

    if(x === 0 && y === 0){
        return "Origem"
    } else if (x === 0) {
        return "Eixo y"
    } else if (y === 0){
        return "Eixo x"
    } else if (x > 0 && y > 0){
        return "Q1"
    } else if (x < 0 && y > 0){
        return "Q2"
    } else if (x < 0 && y < 0){
        return 'Q3'
    } else {
        return 'Q4'
    }
} main()