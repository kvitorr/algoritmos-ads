//Leia os 3 lados de um triangulo e identifique sua hipotenusa e seus cateto

import {input} from "./io_utils.js";

function main(){

    //Entradas
    const [lado1, lado2, lado3] = input('Digite três lados de um triângulo, separando por espaço: ').split(' ').map(Number)
    let hipotenu, catet1, catet2

    //Processamento e saídas
    if(hipotenusa(lado1, lado2, lado3)){
        hipotenu = lado1
        catet1 = lado2
        catet2 = lado3
        
        console.log(`\tHipotenusa: ${hipotenu}\n\tCatetos: ${catet1} e ${catet2}`)
    } else if (hipotenusa(lado2, lado1, lado3)){
        hipotenu = lado2
        catet1 = lado1
        catet2 = lado3

        console.log(`\tHipotenusa: ${hipotenu}\n\tCatetos: ${catet1} e ${catet2}`)
    } else if (hipotenusa(lado3, lado1, lado2)){
        hipotenu = lado3
        catet1 = lado1
        catet2 = lado2

        console.log(`\tHipotenusa: ${hipotenu}\n\tCatetos: ${catet1} e ${catet2}`)
    } else {
        console.log('Não é um triângulo retângulo')
    }
} 

const hipotenusa = (a, b, c) => {return (a*a) === (b*b) + (c*c)}

main()