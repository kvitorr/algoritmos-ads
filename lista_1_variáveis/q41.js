//41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.


import {input, print} from "./io_utils.js"


function main() {
    
    //Entrada
    const a = Number(input('Custo de fábrica de um carro '))

    //Saída
    print(`Custo de um carro para o consumidor: ${a + a * 0.28 + a * 0.45} reais`)

 } main()