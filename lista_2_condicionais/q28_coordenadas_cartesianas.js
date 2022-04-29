//Leia as coordenadas cartesianas (x e y) de 2 pontos no plano, que corresponderão a dois cantos de um retângulo. 

import { input } from "./io_utils.js";

//Baseado nisto, calcule e escreva a área deste retângulo. 

//Lembre-se de que o valor da área não pode ser negativo

function main(){

    //Entradas
    const [x1, y1] = input('Digite as coordenadas cartesianas (x e y), separadas por espaço, do primeiro canto do retângulo: ').split(' ').map(Number)
    const [x2, y2] = input('Digite as coordenadas cartesianas (x e y), separadas por espaço, do segundo canto do retângulo: ').split(' ').map(Number)

    //Processamento

    const area = area_retangulo_coordenadas(x1, x2, y1, y2)

    if(area === 0){
        console.log('Não foi possível calcular a área')
    } else {
        console.log(`Área: ${area}`)
    }
} 

function area_retangulo_coordenadas(x1, x2, y1, y2){
    const largura = Math.abs(x1 - x2)
    const altura = Math.abs(y1 - y2)

    if(altura === 0 || largura === 0){
        return 0
    } else {
        return largura * altura
    }
}

main()